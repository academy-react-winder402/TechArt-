import React from "react";
import { useSelector } from "react-redux";
import PhoneRegister from "./PhoneRegister";
import PhoneConfirm from "./PhoneConfirm";
import PasswordEmailForm from "./SinUp";

const RegisterStepHandler = () => {
  const registerStep = useSelector((state) => state.auth.registerStep);

  return (
    <div>
      {registerStep === "PhoneRegister" && <PhoneRegister />}
      {registerStep === "PhoneConfirm" && <PhoneConfirm />}
      {registerStep === "PasswordEmail" && <PasswordEmailForm />}
    </div>
  );
};

export default RegisterStepHandler;
