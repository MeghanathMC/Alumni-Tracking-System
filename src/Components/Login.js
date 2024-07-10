import React from "react";
import logo from "../Images/live-chat-pic.png";
import TextField from '@mui/material/TextField';
function Login(){
  return (
    <div className="login-conatiner">
        <div className="image-container">
            <img src={logo} alt="Logo" className="welcome-logo"></img>
        </div>
        <div className="login-box">
            <p>Login to your Account</p>
            <TextField 
            id="standard-basic" 
            label="Enter User Name" 
            variant="outlined" />
            <TextField 
            id="outlined-password-input" 
            label="Password"
            type="password" 
            autoComplete="current-password" />

            <Button variant="outlined">Login</Button>
        </div>
    </div>
  )

}
export default Login;