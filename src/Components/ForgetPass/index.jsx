import { Link } from "react-router-dom";
import { ForgetForm } from "../Form/ForgetForm";

import svgright from "../../asset/images/AuthLayout/Group 2394.svg";
import home from "../../asset/images/AuthLayout/home.svg";
import { ForgetFormStep2 } from "./ForgetFormStep2";
import { LoginPage } from "../../Screens/LoginPage";
import { SignUpPage } from "../../Screens/Signup";

const AuthLayout = ({ pageName, margintop, title, desc }) => {
  return (
    <>
      <section
        className="w-[1466px] h-[740px] scale-125 mx-auto mt-[150px]  flex "
        style={{ direction: "rtl" }}
      >
        <div className="flex flex-wrap w-[80%] h-[80%]  m-auto border">
          <div className="w-1/2">
            <img src={svgright} alt="" />
          </div>
          <div className="w-1/2 h-full relative">
            {/* top icons */}
            <div className="w-full h-10% p-8">
              <Link to="/">
                <img
                  src={home}
                  alt=""
                  className="w-[30px] h-[30px] absolute right-5 top-5"
                />
              </Link>
            </div>
            {/* title and desc */}
            <div className={`w-full h-[10%] m-auto text-center ${margintop}`}>
              <h2 className="font-estedadBold text-[35px] text-[#7B7B7D]">
                {title}
              </h2>
              <p className="mt-4 font-shabnam text-[20px] text-[#BEBEBE]">
                {desc}
              </p>
            </div>

            {/* forms */}
            <div className="w-full ">
              {pageName == "Register" ? (
                <SignUpPage />
              ) : pageName == "Login" ? (
                <LoginPage />
              ) : pageName == "ForgetPass" ? (
                <ForgetForm />
              ) : (
                <ForgetFormStep2 />
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export { AuthLayout };
