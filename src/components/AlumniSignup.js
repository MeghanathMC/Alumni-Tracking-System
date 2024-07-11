import React, { useState } from "react";
import axios from "axios";

const AlumniSignup = () => {
  const [formData, setFormData] = useState({
    username: "",
    gmail: "",
    password: "",
    year: "",
    confirmPassword:"",
    expertise: "",
    currentRole: "",
    achievements: "",
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

      const {username,gmail,year,password,confirmPassword}=formData;
      const response = await fetch(
        "http://localhost:5000/alumnitracking/alumniregistration",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          username,year,gmail, password,confirmPassword
        })
        // formData
    });
    if(response.ok){
      alert("Check your mail for verification");
    }
      console.log(response.data);
      // handle success ( redirect to login page or show a success message)
    } catch (error) {
      console.error(error);
      // handle error (e.g., show an error message)
    }
  };

  return (
    <div className="signup-container">
      <form onSubmit={handleSubmit}>
        <h2>Alumni Sign Up</h2>
        <input
          type="text"
          name="username"
          placeholder="Name"
          value={formData.username}
          onChange={handleChange}
          required
        />
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
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="year"
          placeholder="Graduation Year"
          value={formData.year}
          onChange={handleChange}
          required
        />
        {/* <input
          type="text"
          name="expertise"
          placeholder="Expertise/Experience"
          value={formData.expertise}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="currentRole"
          placeholder="Current Role"
          value={formData.currentRole}
          onChange={handleChange}
          required
        />
        <textarea
          name="achievements"
          placeholder="Achievements"
          value={formData.achievements}
          onChange={handleChange}
          required
        /> */}
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default AlumniSignup;
