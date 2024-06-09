import React from "react";
import { useSelector } from "react-redux";
import PhoneRegister from "./PhoneRegister";
import PhoneConfirm from "./PhoneConfirm";
import PasswordEmailForm from "./SinUp";

const RegisterStepHandler = () => {
  const { step } = useSelector((state) => state.auth);
  console.log("step", step);

  return (
    <div>
      {step === "one" && <PhoneRegister />}
      {step === "two" && <PhoneConfirm />}
      {step === "tree" && <PasswordEmailForm />}
    </div>
  );
};

export default RegisterStepHandler;
