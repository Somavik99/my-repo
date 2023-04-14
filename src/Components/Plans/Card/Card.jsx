import React from "react";
import StudentCard from "./StudentCard";
import ProfessionalCard from "./ProfessionalCard";
const Card = ({ Toggled }) => {
  return <div className='mx-[8em]' >{!Toggled ? <StudentCard /> : <ProfessionalCard />}</div>;
};

export default Card;
