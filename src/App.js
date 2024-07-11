import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AlumniSpace from "./components/AlumniSpace";
import Gallery from "./components/Gallery";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Footer from "./components/Footer";
import "./App.css";
import EmailVerification from "./components/EmailVerification";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/alumni-space" element={<AlumniSpace />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/verify-email" element={<EmailVerification/>}/>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
