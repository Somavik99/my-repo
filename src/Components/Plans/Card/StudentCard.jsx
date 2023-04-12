import React from "react";

const StudentCard = ({
  StudentId,
  StudentImage,
  StudentInfo,
  StudentAmount,
  StudentHeader,
}) => {
  return (
    <div className="h-32 w-48 border-black border-2">
      {StudentId}
      <span className="StudentImage_container">
        <img src={StudentImage} alt="StudentImage" />
      </span>
      <p>{StudentHeader}</p>
      <p className="PlanInfo_container">{StudentInfo}</p>
      <span>{StudentAmount}</span>
    </div>
  );
};

export default StudentCard;
