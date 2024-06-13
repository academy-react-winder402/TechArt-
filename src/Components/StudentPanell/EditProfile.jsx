import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useSelector, useDispatch } from "react-redux";
import { setUserInfo, setLoading, setError } from "../../Redux/userSlice"; // Import actions from userSlice
import { UserInfo } from "../../Core/Services/api/UserInfo";
export default function EditProfile() {
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.user.userInfo);
  const isLoading = useSelector((state) => state.user.loading);
  const error = useSelector((state) => state.user.error);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        dispatch(setLoading(true));
        const result = await UserInfo();
        dispatch(setLoading(false));
        dispatch(setUserInfo(result.data)); // Assuming result.data contains user info
      } catch (error) {
        dispatch(setLoading(false));
        dispatch(setError(error.message));
      }
    };

    fetchUserInfo();
  }, [dispatch]);

  const formik = useFormik({
    initialValues: {
      username: userInfo?.username || "",
      about: userInfo?.userAbout || "",
      firstName: userInfo?.fName || "",
      lastName: userInfo?.lName || "",
      email: userInfo?.email || "",
      country: userInfo?.homeAddress?.country || "",
      streetAddress: userInfo?.homeAddress?.streetAddress || "",
      city: userInfo?.homeAddress?.city || "",
      region: userInfo?.homeAddress?.region || "",
      postalCode: userInfo?.homeAddress?.postalCode || "",
    },
    validationSchema: Yup.object({
      username: Yup.string().required("نام کاربری اجباری است"),
      about: Yup.string().required("درباره‌ی من اجباری است"),
      firstName: Yup.string().required("نام اجباری است"),
      lastName: Yup.string().required("نام خانوادگی اجباری است"),
      email: Yup.string()
        .email("ایمیل نامعتبر است")
        .required("ایمیل اجباری است"),
      country: Yup.string(),
      streetAddress: Yup.string(),
      city: Yup.string(),
      region: Yup.string(),
      postalCode: Yup.string(),
    }),
    onSubmit: async (values) => {
      try {
        dispatch(setLoading(true));
        const result = await EditProfile(values);
        dispatch(setLoading(false));
        dispatch(setUserInfo(result.data)); // Assuming result.data contains updated user info
      } catch (error) {
        dispatch(setLoading(false));
        dispatch(setError(error.message));
      }
    },
  });

  return (
    <div className="container lg:mx-auto bg-cyan-950 py-4 px-4 sm:px-6 lg:px-1">
      <div className="py-4 text-white font-black">ویرایش پروفایل</div>
      <form
        className="space-y-20 lg:mx-auto divide-y rounded-lg bg-white divide-gray-200 shadow-md max-w-3xl"
        onSubmit={formik.handleSubmit}
      >
        <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
          <div className="space-y-6 sm:space-y-5">
            <div className="space-y-6 sm:space-y-5">
              <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                <label
                  htmlFor="username"
                  className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                >
                  نام کاربری
                </label>
                <div className="mt-1 sm:col-span-2 sm:mt-0">
                  <div className="flex max-w-lg rounded-md shadow-sm">
                    <input
                      type="text"
                      name="username"
                      id="username"
                      autoComplete="username"
                      className="block max-w-96 min-w-0 flex-1 rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.username}
                    />
                  </div>
                  {formik.touched.username && formik.errors.username ? (
                    <div className="text-red-600">{formik.errors.username}</div>
                  ) : null}
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                <label
                  htmlFor="about"
                  className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                >
                  درباره ی من
                </label>
                <div className="mt-1 sm:col-span-2 sm:mt-0">
                  <textarea
                    id="about"
                    name="about"
                    rows={3}
                    className="block w-full max-w-96 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.about}
                  />
                  <p className="mt-2 text-sm text-gray-500">درباره ی من</p>
                  {formik.touched.about && formik.errors.about ? (
                    <div className="text-red-600">{formik.errors.about}</div>
                  ) : null}
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:items-center sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                <label
                  htmlFor="photo"
                  className="block text-sm font-medium text-gray-700"
                >
                  عکس
                </label>
                <div className="mt-1 sm:col-span-2 sm:mt-0">
                  <div className="flex items-center">
                    <span className="h-12 w-12 overflow-hidden mx-5 rounded-full bg-gray-100">
                      <svg
                        className="h-full w-full text-gray-300"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    </span>
                    <button
                      type="button"
                      className="ml-5 rounded-md border border-gray-300 bg-white py-2 px-3 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      بارگزاری
                    </button>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 items-start border-t border-gray-200 pt-5">
                <label
                  htmlFor="cover-photo"
                  className="block text-sm font-medium text-gray-700"
                >
                  عکس کاربر
                </label>
                <div className="mt-1 sm:col-span-2 sm:mt-0">
                  <div className="flex max-w-lg ml-4 justify-center pl-3 rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                    <div className="space-y-1 text-center">
                      <svg
                        className="mx-auto h-12 w-12 text-gray-400"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 48 48"
                        aria-hidden="true"
                      >
                        <path
                          d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <div className="flex text-sm text-gray-600">
                        <label
                          htmlFor="file-upload"
                          className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
                        >
                          <span>Upload a file</span>
                          <input
                            id="file-upload"
                            name="file-upload"
                            type="file"
                            className="sr-only"
                          />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs text-gray-500">
                        PNG, JPG, GIF up to 10MB
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6 pt-8 sm:space-y-5 sm:pt-10">
              <div>
                <h3 className="text-lg font-medium leading-6 text-gray-900">
                  اطلاعات شخصی
                </h3>
                <p className="mt-1 max-w-2xl text-sm text-gray-500"></p>
              </div>
              <div className="space-y-6 sm:space-y-5">
                <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                  >
                    نام
                  </label>
                  <div className="mt-1 sm:col-span-2 sm:mt-0">
                    <input
                      type="text"
                      name="firstName"
                      id="first-name"
                      autoComplete="given-name"
                      className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:max-w-xs sm:text-sm"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.firstName}
                    />
                    {formik.touched.firstName && formik.errors.firstName ? (
                      <div className="text-red-600">
                        {formik.errors.firstName}
                      </div>
                    ) : null}
                  </div>
                </div>

                <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                  >
                    نام خانوادگی
                  </label>
                  <div className="mt-1 sm:col-span-2 sm:mt-0">
                    <input
                      type="text"
                      name="lastName"
                      id="last-name"
                      autoComplete="family-name"
                      className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:max-w-xs sm:text-sm"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.lastName}
                    />
                    {formik.touched.lastName && formik.errors.lastName ? (
                      <div className="text-red-600">
                        {formik.errors.lastName}
                      </div>
                    ) : null}
                  </div>
                </div>

                <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                  >
                    آدرس ایمیل
                  </label>
                  <div className="mt-1 sm:col-span-2 sm:mt-0">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.email}
                    />
                    {formik.touched.email && formik.errors.email ? (
                      <div className="text-red-600">{formik.errors.email}</div>
                    ) : null}
                  </div>
                </div>

                <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                  <label
                    htmlFor="country"
                    className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                  >
                    کشور
                  </label>
                  <div className="mt-1 sm:col-span-2 sm:mt-0">
                    <select
                      id="country"
                      name="country"
                      autoComplete="country-name"
                      className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:max-w-xs sm:text-sm"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.country}
                    >
                      <option>United States</option>
                      <option>Canada</option>
                      <option>Mexico</option>
                    </select>
                    {formik.touched.country && formik.errors.country ? (
                      <div className="text-red-600">
                        {formik.errors.country}
                      </div>
                    ) : null}
                  </div>
                </div>

                <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                  <label
                    htmlFor="street-address"
                    className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                  >
                    آدرس
                  </label>
                  <div className="mt-1 sm:col-span-2 sm:mt-0">
                    <input
                      type="text"
                      name="streetAddress"
                      id="street-address"
                      autoComplete="street-address"
                      className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.streetAddress}
                    />
                    {formik.touched.streetAddress &&
                    formik.errors.streetAddress ? (
                      <div className="text-red-600">
                        {formik.errors.streetAddress}
                      </div>
                    ) : null}
                  </div>
                </div>

                <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                  <label
                    htmlFor="city"
                    className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                  >
                    شهر
                  </label>
                  <div className="mt-1 sm:col-span-2 sm:mt-0">
                    <input
                      type="text"
                      name="city"
                      id="city"
                      autoComplete="address-level2"
                      className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:max-w-xs sm:text-sm"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.city}
                    />
                    {formik.touched.city && formik.errors.city ? (
                      <div className="text-red-600">{formik.errors.city}</div>
                    ) : null}
                  </div>
                </div>

                <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                  <label
                    htmlFor="region"
                    className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                  >
                    استان
                  </label>
                  <div className="mt-1 sm:col-span-2 sm:mt-0">
                    <input
                      type="text"
                      name="region"
                      id="region"
                      autoComplete="address-level1"
                      className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:max-w-xs sm:text-sm"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.region}
                    />
                    {formik.touched.region && formik.errors.region ? (
                      <div className="text-red-600">{formik.errors.region}</div>
                    ) : null}
                  </div>
                </div>

                <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                  <label
                    htmlFor="postal-code"
                    className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                  >
                    کد پستی
                  </label>
                  <div className="mt-1 sm:col-span-2 sm:mt-0">
                    <input
                      type="text"
                      name="postalCode"
                      id="postal-code"
                      autoComplete="postal-code"
                      className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:max-w-xs sm:text-sm"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.postalCode}
                    />
                    {formik.touched.postalCode && formik.errors.postalCode ? (
                      <div className="text-red-600">
                        {formik.errors.postalCode}
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-5">
          <div className="flex justify-end pb-4">
            <button
              type="button"
              className="rounded-md border border-gray-300 bg-white mx-4 py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              انصراف
            </button>
            <button
              type="submit"
              className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              ذخیره
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
