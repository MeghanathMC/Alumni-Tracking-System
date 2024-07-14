import React from "react";
import "./DualSignup.css";
import AlumniSignup from "./AlumniSignup";
import StudentSignup from "./StudentSignup";
const DualSignup = () => {
  return (
    <div className="dual-signup-container">
      <div className="signup-wrapper">
        <AlumniSignup />
      </div>
      <div className="signup-wrapper">
        <StudentSignup />
      </div>
    </div>
  );
};

export default DualSignup;
