import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AlumniSpace from "./components/AlumniSpace";
import Gallery from "./components/Gallery";
import DualSignup from "./components/DualSignup";
import DualLogin from "./components/DualLogin";
import Footer from "./components/Footer";
import CreateJob from "./components/CreateJob";
import Jobs from "./components/Jobs";
import CreateEvent from "./components/CreateEvent";
import Events from "./components/Events";
import AdminLogin from "./components/AdminLogin";
import Login from "./components/AlumniLogin";
import StudentLogin from "./components/StudentLogin";
import "./App.css"; // Import the App.css file

const App = () => {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/alumni-space" element={<AlumniSpace />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/dual-signup" element={<DualSignup />} />
            <Route path="/dual-login" element={<DualLogin />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/alumni-login" element={<Login />} />
            <Route path="/student-login" element={<StudentLogin />} />
            <Route path="/create-job" element={<CreateJob />} />
            <Route path="/events" element={<Events />} />
            <Route path="/admin-login" element={<AdminLogin />} />
            <Route path="/create-event" element={<CreateEvent />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
