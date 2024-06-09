import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { registerAPI } from "../../Core/Services/api/auth";
import { useNavigate } from "react-router-dom";
import { setPhoneNumber, setStep } from "../../Redux/authSlice";

const PhoneRegister = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialValues = {
    phoneNumber: "",
  };
  const validationSchema = Yup.object({
    phoneNumber: Yup.string()
      .matches(/^[0-9]{11}$/, "شماره تلفن معتبر نیست")
      .required("شماره تلفن الزامی است"),
  });

  const handleSubmit = async (values) => {
    const obj = { phoneNumber: values.phoneNumber };
    const result = await registerAPI(obj);
    if (result.success) {
      dispatch(setPhoneNumber(values.phoneNumber));
      dispatch(setStep("two"));
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">وارد کردن شماره تلفن</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div>
            <label
              htmlFor="phoneNumber"
              className="block text-sm font-medium text-gray-700"
            >
              شماره تلفن
            </label>
            <div className="mt-1">
              <Field
                id="phoneNumber"
                name="phoneNumber"
                type="tel"
                autoComplete="tel"
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
              />
              <ErrorMessage
                name="phoneNumber"
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

export default PhoneRegister;
