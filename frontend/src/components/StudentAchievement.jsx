import React from "react";
import Achievements from "./Achievements"; // Assuming Achievements component is correctly implemented

const StudentAchievement = () => {
  return (
    <div className="achievement-section">
      <h2>Alumni Achievements</h2>
      <div className="achievements-container">
        <Achievements
          image="/path-to-student1.jpg"
          name="John Doe"
          graduationYear="2023"
          achievement="First in Class"
        />
        <Achievements
          image="/path-to-student2.jpg"
          name="Jane Smith"
          graduationYear="2022"
          achievement="Best Research Paper"
        />
        <Achievements
          image="/path-to-student2.jpg"
          name="Mark Henry"
          graduationYear="2022"
          achievement="Topper in VTU Exams"
        />
        <Achievements
          image="/path-to-student2.jpg"
          name="Allen"
          graduationYear="2019"
          achievement="Published Reasearch Paper"
        />
        {/* Add more Achievements components as needed */}
      </div>
    </div>
  );
};

export default StudentAchievement;
