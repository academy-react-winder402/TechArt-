// src/components/LoginForm.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { toast, ToastContainer } from "react-toastify";
import { useDispatch } from "react-redux";
import { login } from "../../Redux/authSlice";
import { loginAPI } from "./../../Core/Services/api/login";
import { setItem } from "../../Core/Services/Common/storage.services";

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [userObj, setUserObj] = useState({ email: "", password: "" });

  const onSubmit = async (values) => {
    //فرایند لاگین
    const user = await loginAPI({
      phoneOrGmail: values.email,
      password: values.password,
      rememberMe: true,
    });

    if (user) {
      // تنظیم توکن
      setItem("token", user.token);
      toast.success("خوش آمدید. لطفا پروفایل خود را تکمیل کنید ");
      dispatch(login());
      navigate("/");
    }
  };

  return (
    <>
      <div className="flex flex-col bg-yellow-400 py-6 sm:px-6 mt-5 flex-grow">
        <div className="sm:w-full sm:max-w-md">
          <h2 className="mt-3 text-center text-3xl font-bold tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <Formik initialValues={userObj} onSubmit={onSubmit}>
          {(formik) => (
            <Form className="mt-8 sm:w-full sm:max-w-md">
              <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                <div className="space-y-6">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email address
                    </label>
                    <Field
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      className="block w-full appearance-none rounded-md py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-red-500 text-sm"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Password
                    </label>
                    <Field
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    />
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="text-red-500 text-sm"
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Field
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                      <label
                        htmlFor="remember-me"
                        className="ml-2 block text-sm text-gray-900"
                      >
                        Remember me
                      </label>
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      disabled={formik.isSubmitting}
                      className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      {formik.isSubmitting ? "Signing in..." : "Sign in"}
                    </button>
                  </div>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
      <ToastContainer />
    </>
  );
};

export default LoginForm;
