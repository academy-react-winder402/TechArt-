import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";

const PhoneConfirm = () => {
  const dispatch = useDispatch();
  const { phoneNumber } = useSelector((state) => state.auth);
  const initialValues = {
    verificationCode: "",
  };

  const validationSchema = Yup.object({
    verificationCode: Yup.string()
      .matches(/^\d{5}$/, "کد تایید باید 5 رقمی باشد")
      .required("کد تایید الزامی است"),
  });

  const handleSubmit = async (values) => {
    const verifyData = {
      phoneNumber: phoneNumber,
      verificationCode: values.verificationCode,
    };
    const result = await verifyMessageAPI(verifyData);
    if (result.success) {
      dispatch(setStep("tree"));
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">وارد کردن کد تایید</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div>
            <label
              htmlFor="verificationCode"
              className="block text-sm font-medium text-gray-700"
            >
              کد تایید5 رقمی
            </label>
            <div className="mt-1">
              <Field
                id="verificationCode"
                name="verificationCode"
                type="text"
                autoComplete="off"
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
              />
              <ErrorMessage
                name="verificationCode"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>
          </div>

          <div className="mt-4">
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              ارسال
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default PhoneConfirm;
