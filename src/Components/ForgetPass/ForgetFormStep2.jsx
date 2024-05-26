import { Link, useNavigate, useParams } from "react-router-dom";
import lockIcon from "../../asset/images/Login/icons8-lock-48.svg";

import { Forms } from "../common/Forms";
import { ErrorMessage, Field } from "formik";

import { useEffect, useState } from "react";
import { forgetValidation2 } from "../../core/validation";
import toast from "react-hot-toast";
import {
  ForgetPassStep2,
  ForgetPassStep3,
} from "../../Core/Services/api/Forgetpass";

export const ForgetFormStep2 = () => {
  const navigate = useNavigate();

  const [response, setResponse] = useState([]);

  const ConfigValue = useParams().ConfigValue;
  console.log(ConfigValue);

  const ForgetStep2 = async () => {
    const result = await ForgetPassStep2(ConfigValue);

    setResponse(result);
  };

  console.log(response);

  const onSubmit = async (value) => {
    const obj = {
      userId: response?.id,
      newPassword: value?.password,
      resetValue: response?.message,
    };
    const result = await ForgetPassStep3(obj);
    if (result.success == true) {
      navigate("/Login");
    }
  };

  useEffect(() => {
    ForgetStep2();
  }, []);

  return (
    <>
      <Forms
        initialValues={{ password: "" }}
        onSubmit={onSubmit}
        validationSchema={forgetValidation2}
      >
        {/* PassWord Field */}
        <div className="w-[60%] h-full m-auto">
          <div className="w-full h-[53px]  bg-[#F6F6F6] mt-[69px] rounded-lg flex">
            <div className="w-[17%] h-full bg-[#D179CE] rounded-r-[8px]">
              <img src={lockIcon} alt="" className="pt-3 mr-4 scale-[1.19]" />
            </div>
            <div className="w-[83%] h-full">
              <Field
                name="password"
                placeholder="رمز  جدید"
                className=" outline-none font-shabnam text-[17px] text-[#5c5c64] bg-[#F6F6F6] mr-3 w-[94%] h-full"
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
          {/* forget Button */}
          {/* <FormButton text={"ورود"} /> */}
        </div>
      </Forms>
    </>
  );
};
