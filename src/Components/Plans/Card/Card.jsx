import React from "react";
import StudentCard from "./StudentCard";
import ProfessionalCard from "./ProfessionalCard";
const Card = ({ type, Id, Info, Amount, Header, Toggled }) => {
  return (
    <div>
      {!Toggled ? (
        <StudentCard
          className="overflow-auto"
          studentId={Id[0]}
          studentType={type.Id}
          studentInfo={Info.Id}
          studentAmount={Amount.Id}
          studentHeader={Header.Id}
        />
      ) : (
        <ProfessionalCard
        ProfessionalId={Id[1]}
        ProfessionalType={type.Id}
        ProfessionalInfo={Info.Id}
        ProfessionalAmount={Amount.Id}
        ProfessionalHeader={Header.Id}
        />
      )}
    </div>
  );
};

export default Card;
