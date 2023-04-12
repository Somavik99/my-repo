import React, { useEffect, useState } from "react";
import Switch from "./Switch/Switch";

import { PlanData } from "./PlanData/PlanData";

const Plans = () => {
  const [Toggled, setToggled] = useState(false);

  const onToggle = () => {
    return setToggled(!Toggled);
  };

  useEffect(() => {
    console.log(PlanData);
  }, []);

  return (
    <div>
      <div className="SwitchCase">
        {PlanData.map((data) => {
          return (
            <div key={data.id}>
              {!onToggle ? <StudentCard /> : <ProfessionalCard />}
            </div>
          );
        })}
      </div>
      <Switch onToggle={onToggle} />
    </div>
  );
};

export default Plans;
