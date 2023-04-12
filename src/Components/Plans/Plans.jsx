import React, { useEffect, useState } from "react";
import Switch from "./Switch/Switch";
import StudentCard from "./Card/StudentCard";
import ProfessionalCard from "./Card/ProfessionalCard";
import { PlanData } from "./PlanData/PlanData";

const Plans = () => {
  const [Toggled, setToggled] = useState(false);

  const isToggled = () => {
    return setToggled(() => {
      !Toggled;
      true;
    });
  };

  useEffect(() => {
    console.log(PlanData);
  }, []);

  return (
    <div>
      <div className="SwitchCase">
        {PlanData.map((data, index) => {
          return (
            <div key={index}>
              {isToggled === Toggled ? (
                <StudentCard
                  StudentId={data.id[0]}
                  StudentImage={data.image[0]}
                  StudentInfo={data.description[0]}
                  StudentAmount={data.amount[0]}
                  StudentHeader={data.PlanName[0]}
                />
              ) : (
                <ProfessionalCard
                  ProfessionalId={data.id[1]}
                  ProfessionalImage={data.image[1]}
                  ProfessionalInfo={data.description[1]}
                  ProfessionalAmount={data.amount[1]}
                  ProfessionalHeader={data.PlanName[1]}
                />
              )}
            </div>
          );
        })}
      </div>
      <Switch isToggled={isToggled} className=" w-5 border-2 border-black" />
    </div>
  );
};

export default Plans;
