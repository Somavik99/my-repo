import React from "react";

const StudentCard = () => {
  return (
    <div className="h-32 w-48 border-black border-2">
      <span className="StudentImage_container">
        <img
          src="https://www.kindpng.com/picc/m/764-7644523_transparent-passing-out-papers-clipart-vector-student-computer.png"
          alt="Transparent Passing Out Papers Clipart - Vector Student Computer Png, Png Download@kindpng.com"
        />
      </span>
      <p> PlanName: Student Plan</p>
      <p className="PlanInfo_container">
        description: This plan is a student oriented plan. It has the access to
        all kinds of courses for students
      </p>
      <span>amount: $70 per 3 months</span>
      <p></p>
    </div>
  );
};

export default StudentCard;
