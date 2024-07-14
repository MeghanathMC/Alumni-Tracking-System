// src/App.jsx
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
import Events from "./components/Events"; // Don't forget to import the Events component
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
          <Route path="/jobs" element={<Jobs />} />

          <Route path="/create-job" element={<CreateJob />} />
          <Route path="/events" element={<Events />} />

          <Route path="/create-event" element={<CreateEvent />} />
          {/* Route for Events component */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
