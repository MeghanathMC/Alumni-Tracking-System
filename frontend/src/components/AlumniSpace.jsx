import React from "react";
import Alumni from "./Alumni";
import Team from "./Team";
import { Link } from "react-router-dom";
import "./AlumniSpace.css"; // Import the CSS for styling
import jobs from "../assets/jobs.jpg";
import events from "../assets/events.jpg";
const AlumniSpace = () => {
  return (
    <>
      {/* <div className="sections">
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
      </div> */}
      <div className="dashboard-section">
        <h3>Job Opportunities</h3>
        <img src={jobs} alt="job photo" />
        <p>Find the perfect job that matches your skills and aspirations</p>
        <Link to="/jobs" className="dashboard-button">
          View Jobs
        </Link>
      </div>
      <div className="dashboard-section">
        <h3>Upcoming Events</h3>
        <img src={events} alt="job photo" />
        <p>"Stay updated with the latest events and gatherings."</p>
        <Link to="/events" className="dashboard-button">
          View Events
        </Link>
      </div>
      <Alumni />
      <Team />
    </>
  );
};

export default AlumniSpace;
