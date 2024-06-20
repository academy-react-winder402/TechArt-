// src/components/LoginButton.js
import React from "react";
import { useNavigate } from "react-router-dom";

const LoginButton = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <button
      onClick={handleLoginClick}
      className="bg-sky-900	 hover:bg-sky-950	 text-white font-bold py-1 px-4 rounded"
    >
      Login
    </button>
  );
};

export default LoginButton;
