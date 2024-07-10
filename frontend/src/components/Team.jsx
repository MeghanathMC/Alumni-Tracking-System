import React from "react";

const Team = () => {
  return (
    <div className="team-container">
      <h2>Meet Our Team</h2>
      <div className="team-members">
        <div className="team-member">
          <h3>John Doe</h3>
          <p>Project Contribution: Frontend Development</p>
          <div className="social-links">
            <a
              href="https://linkedin.com/in/johndoe"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/path-to-linkedin-icon.png" alt="LinkedIn" />
            </a>
            <a
              href="https://github.com/johndoe"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/path-to-github-icon.png" alt="GitHub" />
            </a>
          </div>
        </div>
        <div className="team-member">
          <h3>Jane Smith</h3>
          <p>Project Contribution: Backend Development</p>
          <div className="social-links">
            <a
              href="https://linkedin.com/in/janesmith"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/path-to-linkedin-icon.png" alt="LinkedIn" />
            </a>
            <a
              href="https://github.com/janesmith"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/path-to-github-icon.png" alt="GitHub" />
            </a>
          </div>
        </div>
        <div className="team-member">
          <h3>Jane Smith</h3>
          <p>Project Contribution: Backend Development</p>
          <div className="social-links">
            <a
              href="https://linkedin.com/in/janesmith"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/path-to-linkedin-icon.png" alt="LinkedIn" />
            </a>
            <a
              href="https://github.com/janesmith"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/path-to-github-icon.png" alt="GitHub" />
            </a>
          </div>
        </div>
        {/* Add more team members as needed */}
      </div>
    </div>
  );
};

export default Team;
