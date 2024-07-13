import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import email from "../../asset/images/forgetForm/email.svg";
import { ForgetPassStep1 } from "../../Core/Services/api/Forgetpass";

export const ForgetForm = () => {
  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("ایمیل معتبر نیست").required("ایمیل الزامی است"),
  });

  const onSubmit = async (value) => {
    const obj = {
      email: value.email,
      baseUrl: "http://localhost:5173/resetpassword",
    };
    const forget = await ForgetPassStep1(obj);
    if (forget.success) {
      toast.success("لینک بازنشانی رمز عبور ارسال شد.");
      navigate("/resetpassword");
    } else {
      toast.error("خطایی رخ داده است. لطفاً دوباره امتحان کنید.");
    }
  };

  return (
    <>
      <ToastContainer />
      <Formik
        initialValues={{ email: "" }}
        onSubmit={onsubmit}
        validationSchema={validationSchema}
      >
        <Form className="w-[60%] h-full m-auto">
          <div className="w-full h-[53px] bg-[#F6F6F6] mt-[67px] rounded-lg flex">
            <div className="w-[17%] h-full bg-[#D179CE] rounded-r-[8px]">
              {/* <img src={email} alt="" className="pt-3 mr-4 scale-[1.20]" /> */}
            </div>
            <div className="w-[83%] h-full">
              <Field
                name="email"
                placeholder="آدرس ایمیل"
                className="outline-none font-shabnam text-[17px] text-[#5c5c64] bg-[#F6F6F6] mr-3 w-[94%] h-full"
              />
              <ErrorMessage
                component="p"
                className="text-red-600 font-shabnam absolute left-6 top-3"
                name="email"
              >
                {(errorMSG) => {
                  toast.error(errorMSG);
                }}
              </ErrorMessage>
            </div>
          </div>
          <div className="w-[40%] h-[2%] mt-[20px] flex flex-row-reverse flex-wrap">
            <label
              htmlFor="robot"
              className="text-[#656161] font-shabnam text-[12px] ml-6 px-2"
            >
              من ربات نیستم
            </label>
            <Field name="robot" type="checkbox" className="w-[16px] h-[16px]" />
          </div>
          <button
            type="submit"
            className="mt-4 w-full py-2 bg-blue-500 text-white rounded-md"
          >
            ارسال
          </button>
        </Form>
      </Formik>
    </>
  );
};
