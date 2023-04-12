import React from "react";

const StudentCard = ({
  StudentId,
  StudentInfo,
  StudentAmount,
  StudentHeader,
}) => {
  return (
    <div className="h-32 w-48 border-black border-2">
      {StudentId}
      <span className="StudentImage_container">
        <img
          src="https://www.kindpng.com/picc/m/764-7644523_transparent-passing-out-papers-clipart-vector-student-computer.png"
          alt="Transparent Passing Out Papers Clipart - Vector Student Computer Png, Png Download@kindpng.com"
        />
      </span>
      <p>{StudentHeader}</p>
      <p className="PlanInfo_container">{StudentInfo}</p>
      <span>{StudentAmount}</span>
    </div>
  );
};

export default StudentCard;
