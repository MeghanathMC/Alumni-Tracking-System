import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AlumniSpace from "./components/AlumniSpace";
import Gallery from "./components/Gallery";
import DualSignup from "./components/DualSignup";
// import Login from "./components/Login";
import DualLogin from "./components/DualLogin";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/alumni-space" element={<AlumniSpace />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/dual-signup" element={<DualSignup />} />
          <Route path="/dual-login" element={<DualLogin />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
