import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Button from "./RegisterButton";
import { signUpAPI } from "../../Core/Services/api/auth";

const StepForm = () => {
  const [step, setStep] = useState(1);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [verifyCode, setVerifyCode] = useState("");
  const [password, setPassword] = useState("");
  const [gmail, setGmail] = useState("");

  const nextStep = () => {
    setStep(step + 1);
  };

  const handleSubmitStep1 = async () => {
    try {
      // فراخوانی API برای ارسال پیام تأییدیه
      await fetch(`${baseApi}/Sign/SendVerifyMessage`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ phoneNumber }),
      });
      nextStep();
    } catch (error) {
      console.error("خطا در ارسال پیام تأییدیه:", error);
    }
  };

  const handleSubmitStep2 = async () => {
    try {
      // فراخوانی API برای تأیید پیام
      await fetch(`${baseApi}/Sign/VerifyMessage`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ phoneNumber, verifyCode }),
      });
      nextStep();
    } catch (error) {
      console.error("خطا در تأیید پیام:", error);
    }
  };

  const handleSubmitStep3 = async () => {

    const obj ={
      password:value.password,
      gmail:value.gmail,
      phoneNumber:value.phoneNumber,
    }

    const res = await signUpAPI(obj)
    }
  };

  return (
    <Formik
      initialValues={{
        phoneNumber: "",
        code: "",
        password: "",
        gmail: "",
      }}
      validationSchema={
        step === 1
          ? Yup.object().shape({
              phoneNumber: Yup.string()
                .matches(/^[0-9]{11}$/, "شماره تلفن باید ۱۱ رقم باشد")
                .required("شماره تلفن الزامی است"),
            })
          : step === 2
          ? Yup.object().shape({
              verifyCode: Yup.string()
                .matches(/^[0-9]{5}$/, "کد باید ۵ رقم باشد")
                .required("کد الزامی است"),
            })
          : Yup.object().shape({
              password: Yup.string()
                .min(6, "پسورد باید حداقل ۶ کاراکتر باشد")
                .required("پسورد الزامی است"),
              gmail: Yup.string()
                .email("ایمیل نامعتبر است")
                .required("ایمیل الزامی است"),
            })
      }
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ errors, touched }) => (
        <Form className="flex flex-col items-center mt-10">
          {step === 1 && (
            <>
              <Field
                name="phoneNumber"
                type="number"
                placeholder="شماره تلفن"
                className="border border-gray-400 rounded px-4 py-2 mb-4"
              />
              {errors.phoneNumber && touched.phoneNumber ? (
                <div className="text-red-500">{errors.phoneNumber}</div>
              ) : null}
              <Button onClick={handleSubmitStep1}>ورود به مرحله دوم</Button>
            </>
          )}
          {step === 2 && (
            <>
              <Field
                name="verifyCode"
                type="text"
                placeholder="کد پنج رقمی"
                className="border border-gray-400 rounded px-4 py-2 mb-4"
                onChange={(e) => setVerifyCode(e.target.value)}
              />
              {errors.verifyCode && touched.verifyCode ? (
                <div className="text-red-500">{errors.verifyCode}</div>
              ) : null}
              <Button onClick={handleSubmitStep2}>ورود به مرحله سوم</Button>
            </>
          )}
          {step === 3 && (
            <>
              <Field
                name="password"
                type="password"
                placeholder="پسورد"
                className="border border-gray-400 rounded px-4 py-2 mb-4"
                onChange={(e) => setPassword(e.target.value)}
              />
              {errors.password && touched.password ? (
                <div className="text-red-500">{errors.password}</div>
              ) : null}
              <Field
                name="gmail"
                type="email"
                placeholder="ایمیل"
                className="border border-gray-400 rounded px-4 py-2 mb-4"
                onChange={(e) => setGmail(e.target.value)}
              />
              {errors.gmail && touched.gmail ? (
                <div className="text-red-500">{errors.gmail}</div>
              ) : null}
              <Button onClick={handleSubmitStep3}>ثبت نام</Button>
            </>
          )}
        </Form>
      )}
    </Formik>
  );
};

export default StepForm;
