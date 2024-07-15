import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const StudentLogin = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    role: "student",
    gmail: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { gmail, password, role } = formData;
      const response = await fetch(
        "http://localhost:5000/alumnitracking/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            gmail,
            password,
            role,
          }),
        }
      );
      const responsedata = await response.json();
      console.log("Hiiiiiii", responsedata);

      const userData = responsedata.user;
      console.log("User data:", userData);

      localStorage.setItem("user", JSON.stringify(userData));

      navigate("/home");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <h2>Student Login</h2>
        <input
          type="email"
          name="gmail"
          placeholder="Email"
          value={formData.gmail}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <input type="hidden" name="role" value="student" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default StudentLogin;
