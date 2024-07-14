// src/components/Jobs.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Jobs.css";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/jobs")
      .then((response) => response.json())
      .then((data) => setJobs(data))
      .catch((error) => console.error("Error fetching jobs:", error));
  }, []);

  return (
    <div className="jobs-page">
      <h2>Job Opportunities</h2>
      {jobs.length === 0 ? (
        <p>No active jobs posted.</p>
      ) : (
        jobs.map((job) => (
          <div key={job._id} className="job-card">
            <img src={job.companyImage} alt={job.company} />
            <h3>{job.title}</h3>
            <p>{job.company}</p>
            <p>{job.location}</p>
            <p>{job.description}</p>
            <p>{job.qualification}</p>
            <p>
              Deadline: {new Date(job.applicationDeadline).toLocaleDateString()}
            </p>
          </div>
        ))
      )}
      <Link to="/create-job" className="create-job-button">
        Create Job
      </Link>
    </div>
  );
};

export default Jobs;
