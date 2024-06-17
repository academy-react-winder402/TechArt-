import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom"; // Import useLocation
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { loginAPI } from "./../../Core/Services/api/login";
import { toast, ToastContainer } from "react-toastify";
import { setItem } from "../../Core/Services/Common/storage.services";

const LoginForm = () => {
  const location = useLocation(); // Initialize useLocation hook
  const Navigate = useNavigate();

  const [userObj, setUserObj] = useState({ PhoneOrGmail: "", Password: "" });

  // const validationSchema = Yup.object({
  //   email: Yup.string()
  //     .email("Invalid email address")
  //     .required("Email is required"),
  //   password: Yup.string().required("Password is required"),
  // });

  const onSubmit = async (values) => {
    console.log("userObj:", values);
    const obj = {
      phoneOrGmail: values?.email,
      password: values?.password,
      rememberMe: true,
    };
    const user = await loginAPI(obj);
    // Check if login is successful
    if (user) {
      // Redirect to the homepage if login is successful
      // Access current pathname from location object

      setItem("token", user.token);
      toast.success("خوش امدید");
      Navigate("/");
      // Redirect to the homepage
    } // Call LoginUser function upon form submission
  };

  return (
    <>
      <div className="flex flex-col bg-yellow-400 py-6  sm:px-6 mt-5 flex-grow ">
        <div className=" sm:w-full sm:max-w-md">
          <h2 className="mt-3 text-center text-3xl font-bold tracking-tight text-gray-900">
            Sign in to your account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Or{" "}
            <a
              href="#"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              start your 14-day free trial
            </a>
          </p>
        </div>

        <Formik
          initialValues={userObj}
          // validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {(formik) => (
            <Form className="mt-8  sm:w-full sm:max-w-md">
              <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                <div className="space-y-6">
                  <div>
                    <label
                      htmlFor="n"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email address
                    </label>
                    <Field
                      id="email"
                      name="email"
                      type=""
                      autoComplete="email"
                      className="block w-full appearance-none rounded-md  py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
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

                    <div className="text-sm">
                      <a
                        href="#"
                        className="font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        Forgot your password?
                      </a>
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
