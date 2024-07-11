import React from "react";
import Alumni from "./Alumni";
import Team from "./Team";
import { Link } from "react-router-dom";

const AlumniSpace = () => {
  return (
    <>
      <div className="sections">
        <div className="section">
          <h3>Alumni Members</h3>
          <p>
            "The roots of education are bitter, but the fruit is sweet." -
            Aristotle
          </p>
          <Link to="/alumni-signup" className="signup-button">
            Sign Up as Alumni
          </Link>
        </div>
        <div className="section">
          <h3>College Students</h3>
          <p>
            "Education is the most powerful weapon which you can use to change
            the world." - Nelson Mandela
          </p>
          <Link to="/student-signup" className="signup-button">
            Sign Up as Student
          </Link>
        </div>
      </div>
      <Alumni />
      <Team />
    </>
  );
};

export default AlumniSpace;
