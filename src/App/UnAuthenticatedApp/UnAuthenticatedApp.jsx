import React from "react";
import { Routes, Route } from "react-router-dom";
import { Landing } from "../../screens/Landing/Landing";

const UnAuthenticatedApp = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
    </Routes>
  );
};
export default UnAuthenticatedApp;
