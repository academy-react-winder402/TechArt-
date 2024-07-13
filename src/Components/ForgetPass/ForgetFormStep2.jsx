import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate, useParams } from "react-router-dom";
import * as Yup from "yup";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import lockIcon from "../../asset/images/Login/icons8-lock-48.svg";
import {
  ForgetPassStep2,
  ForgetPassStep3,
} from "../../Core/Services/api/Forgetpass";

export const ForgetFormStep2 = () => {
  const navigate = useNavigate();
  const [response, setResponse] = useState([]);
  const ConfigValue = useParams().ConfigValue;

  const validationSchema = Yup.object().shape({
    password: Yup.string()
      .min(6, "رمز عبور باید حداقل 6 کاراکتر باشد")
      .required("رمز عبور الزامی است"),
  });

  const ForgetStep2 = async () => {
    const result = await ForgetPassStep2(ConfigValue);
    setResponse(result);
  };

  const onSubmit = async (value) => {
    const obj = {
      userId: response?.id,
      newPassword: value?.password,
      resetValue: response?.message,
    };
    const result = await ForgetPassStep3(obj);
    if (result.success) {
      toast.success("رمز عبور با موفقیت تغییر یافت.");
      navigate("/Login");
    } else {
      toast.error("خطایی رخ داده است. لطفاً دوباره امتحان کنید.");
    }
  };

  useEffect(() => {
    ForgetStep2();
  }, []);

  return (
    <>
      <ToastContainer />
      <Formik
        initialValues={{ password: "" }}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form className="w-[60%] h-full m-auto">
          <div className="w-full h-[53px] bg-[#F6F6F6] mt-[69px] rounded-lg flex">
            <div className="w-[17%] h-full bg-[#D179CE] rounded-r-[8px]">
              {/* <img src={lockIcon} alt="" className="pt-3 mr-4 scale-[1.19]" /> */}
            </div>
            <div className="w-[83%] h-full">
              <Field
                name="password"
                placeholder="رمز جدید"
                className="outline-none font-shabnam text-[17px] text-[#5c5c64] bg-[#F6F6F6] mr-3 w-[94%] h-full"
                type="password"
              />
              <ErrorMessage
                component="p"
                className="text-red-600 font-shabnam absolute left-6 top-3"
                name="password"
              >
                {(errorMSG) => {
                  toast.error(errorMSG);
                }}
              </ErrorMessage>
            </div>
          </div>
          <button
            type="submit"
            className="mt-4 w-full py-2 bg-blue-500 text-white rounded-md"
          >
            ورود
          </button>
        </Form>
      </Formik>
    </>
  );
};
