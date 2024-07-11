import React, { useEffect } from "react";
import axios from "axios";
import { useLocation,useNavigate } from "react-router-dom";

const EmailVerification = () => {
  const history = useNavigate();
  const location=useLocation();

  useEffect(() => {
    const verifyEmail = async () => {
      const params = new URLSearchParams(location.search);
      const token = params.get("token");
      console.log(token);
      try {
        const response = await fetch(`http://localhost:5000/alumnitracking/verify-email?token=${token}`,{
            method:"POST",
        headers:{
          "Content-Type":"application/json"
        }
        });
        const data = await response.json(); // Parsing the response as JSON

        if (response.ok) {
          console.log(data);
          history("/login"); // navigate to login after successful verification
        } else {
          console.error("Verification failed:", data.msg);
          // Optionally handle error, e.g., display error message to user
        }
      } catch (error) {
        console.error("Error during verification:", error);
        // Optionally handle error, e.g., display error message to user
      }
    };


    verifyEmail();
  }, [location, history]);

  return <div>Verifying email...</div>;
};

export default EmailVerification;
