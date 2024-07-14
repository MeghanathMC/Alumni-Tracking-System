import React from "react";
import Login from "./Login";
import AdminLogin from "./AdminLogin";
import StudentLogin from "./StudentLogin";
import "./DualLogin.css";

const DualLogin = () => {
  return (
    <div className="dual-login-container">
      <div className="login-wrapper">
        <StudentLogin />
      </div>
      <div className="login-wrapper">
        <Login />
      </div>
      <div className="login-wrapper">
        <AdminLogin />
      </div>
    </div>
  );
};

export default DualLogin;
