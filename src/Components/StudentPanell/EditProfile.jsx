import { setUserInfo, setLoading, setError } from "../../Redux/userSlice"; // Import actions from userSlice
import { UserInfo } from "../../Core/Services/api/UserInfo";
// EditProfile.js

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleUser } from "../../Redux/user";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { EditProfileApi } from "../../Core/Services/api/EditProfile";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const EditProfile = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState();

  const initialValues = {
    fName: user?.fName,
    lName: user?.lName,
    userAbout: user?.userAbout,
    linkdinProfile: user?.linkdinProfile,
    telegramLink: user?.telegramLink,
    receiveMessageEvent: false,
    homeAdderess: user?.homeAdderess,
    nationalCode: user?.nationalCode,
    gender: true,
    birthday: user?.birthday,
    latitude: user?.latitude,
    longitude: user?.longitude,
  };
  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const userInfo = await UserInfo();
        setUser(userInfo);
        dispatch(setUserInfo(userInfo));
      } catch (error) {
        console.error("Error fetching user info:", error);
        toast.error("خطا در دریافت اطلاعات کاربر");
      }
    };

    fetchUserInfo();
  }, [dispatch]);

  // Define Yup schema for validation
  const validationSchema = Yup.object().shape({
    fName: Yup.string().required("نام الزامی است"),
    lName: Yup.string().required("نام خانوادگی الزامی است"),
    userAbout: Yup.string(),
    linkdinProfile: Yup.string().url("لینک وارد شده معتبر نیست"),
    telegramLink: Yup.string().url("لینک وارد شده معتبر نیست"),
    homeAddress: Yup.string(),
    nationalCode: Yup.string().matches(/^\d{10}$/, "کد ملی باید 10 رقمی باشد"),
    birthday: Yup.date().nullable(),
    latitude: Yup.string(),
    longitude: Yup.string(),
  });

  // Handle form submission
  const handleSubmit = async (values, { setSubmitting }) => {
    const formData = new FormData();
    formData.append("FName", values?.fName);
    formData.append("LName", values?.lName);
    formData.append("UserAbout", values?.userAbout);
    formData.append("LinkdinProfile", values?.linkdinProfile);
    formData.append("TelegramLink", values?.telegramLink);
    formData.append("HomeAdderess", values?.homeAdderess);
    formData.append("NationalCode", values?.nationalCode);
    formData.append("Birthday", values?.birthday);
    formData.append("Latitude", values?.latitude);
    formData.append("Longitude", values?.longitude);

    try {
      const updatedUserInfo = await EditProfileApi(formData);
      dispatch(handleUser(updatedUserInfo));
      toast.success("اطلاعات کاربر با موفقیت به‌روزرسانی شد");
    } catch (error) {
      console.error("Error updating user profile:", error);
      toast.error("خطا در آپدیت اطلاعات کاربر");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-8 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">ویرایش اطلاعات کاربر</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        enableReinitialize
      >
        {({ setFieldValue, isSubmitting }) => (
          <Form>
            <div className="grid grid-cols-1 gap-y-4">
              <div>
                <label htmlFor="fName" className="block font-medium mb-1">
                  نام:
                </label>
                <Field
                  type="text"
                  id="fName"
                  name="fName"
                  className="w-full px-3 py-2 border rounded-md"
                />
                <ErrorMessage
                  name="fName"
                  component="div"
                  className="text-red-500"
                />
              </div>

              <div>
                <label htmlFor="lName" className="block font-medium mb-1">
                  نام خانوادگی:
                </label>
                <Field
                  type="text"
                  id="lName"
                  name="lName"
                  className="w-full px-3 py-2 border rounded-md"
                />
                <ErrorMessage
                  name="lName"
                  component="div"
                  className="text-red-500"
                />
              </div>

              <div>
                <label htmlFor="userAbout" className="block font-medium mb-1">
                  درباره‌ی کاربر:
                </label>
                <Field
                  as="textarea"
                  id="userAbout"
                  name="userAbout"
                  className="w-full px-3 py-2 border rounded-md"
                />
                <ErrorMessage
                  name="userAbout"
                  component="div"
                  className="text-red-500"
                />
              </div>

              <div>
                <label
                  htmlFor="linkdinProfile"
                  className="block font-medium mb-1"
                >
                  پروفایل لینکدین:
                </label>
                <Field
                  type="text"
                  id="linkdinProfile"
                  name="linkdinProfile"
                  className="w-full px-3 py-2 border rounded-md"
                />
                <ErrorMessage
                  name="linkdinProfile"
                  component="div"
                  className="text-red-500"
                />
              </div>

              <div>
                <label
                  htmlFor="telegramLink"
                  className="block font-medium mb-1"
                >
                  لینک تلگرام:
                </label>
                <Field
                  type="text"
                  id="telegramLink"
                  name="telegramLink"
                  className="w-full px-3 py-2 border rounded-md"
                />
                <ErrorMessage
                  name="telegramLink"
                  component="div"
                  className="text-red-500"
                />
              </div>

              <div>
                <label className="block font-medium mb-1">
                  دریافت رویداد پیام:
                  <Field
                    type="checkbox"
                    id="receiveMessageEvent"
                    name="receiveMessageEvent"
                    className="ml-2"
                  />
                </label>
              </div>

              <div>
                <label
                  htmlFor="homeAdderess"
                  className="block font-medium mb-1"
                >
                  آدرس منزل:
                </label>
                <Field
                  as="textarea"
                  id="homeAdderess"
                  name="homeAdderess"
                  className="w-full px-3 py-2 border rounded-md"
                />
                <ErrorMessage
                  name="homeAdderess"
                  component="div"
                  className="text-red-500"
                />
              </div>

              <div>
                <label
                  htmlFor="nationalCode"
                  className="block font-medium mb-1"
                >
                  کد ملی:
                </label>
                <Field
                  type="text"
                  id="nationalCode"
                  name="nationalCode"
                  className="w-full px-3 py-2 border rounded-md"
                />
                <ErrorMessage
                  name="nationalCode"
                  component="div"
                  className="text-red-500"
                />
              </div>

              <div>
                <label htmlFor="gender" className="block font-medium mb-1">
                  جنسیت:
                </label>
                <Field
                  as="select"
                  id="gender"
                  name="gender"
                  className="w-full px-3 py-2 border rounded-md"
                >
                  <option value={true}>مرد</option>
                  <option value={false}>زن</option>
                </Field>
              </div>

              <div>
                <label htmlFor="birthday" className="block font-medium mb-1">
                  تاریخ تولد:
                </label>
                <Field
                  onChange={(e) => setFieldValue("birthday", e.target.value)}
                  type="date"
                  id="birthday"
                  name="birthday"
                  className="w-full px-3 py-2 border rounded-md"
                />
                <ErrorMessage
                  name="birthday"
                  component="div"
                  className="text-red-500"
                />
              </div>

              <div>
                <label htmlFor="latitude" className="block font-medium mb-1">
                  عرض جغرافیایی:
                </label>
                <Field
                  type="text"
                  id="latitude"
                  name="latitude"
                  className="w-full px-3 py-2 border rounded-md"
                />
                <ErrorMessage
                  name="latitude"
                  component="div"
                  className="text-red-500"
                />
              </div>

              <div>
                <label htmlFor="longitude" className="block font-medium mb-1">
                  طول جغرافیایی:
                </label>
                <Field
                  type="text"
                  id="longitude"
                  name="longitude"
                  className="w-full px-3 py-2 border rounded-md"
                />
                <ErrorMessage
                  name="longitude"
                  component="div"
                  className="text-red-500"
                />
              </div>

              <div>
                <label htmlFor="userImage" className="block font-medium mb-1">
                  تصویر کاربر:
                </label>
                <Field
                  type="file"
                  id="userImage"
                  name="userImage"
                  accept="image/*"
                  className="w-full px-3 py-2 border rounded-md"
                />
              </div>

              <div className="mt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
                >
                  ذخیره تغییرات
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default EditProfile;
