import React from "react";
import logo from "../Images/live-chat-pic.png";

function Welcome(){
    return (
    <div className="welcome-container">
        <img src={logo} alt="Logo" />
         <p>View and text directly to people present</p>
    </div>
    );
}

export default Welcome;