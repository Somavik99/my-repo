import React, { useEffect, useState } from "react";
import Switch from "./Switch/Switch";
import Card from "./Card/Card";
import { PlanData } from "./PlanData/PlanData";

const Plans = () => {
  const [Toggled, setToggled] = useState(false);

  const isToggled = () => {
    return setToggled((Toggled) => !Toggled);
  };

  useEffect(() => {
    console.log(PlanData);
    PlanData;
  }, []);

  return (
    <div>
      <div className="SwitchCase">
        {PlanData.map((data, index) => {
          return (
            <div key={index}>
              {
                <Card
                  Toggled={Toggled}
                  type={data.type}
                  Id={data.id}
                  Info={data.description}
                  Amount={data.amount}
                  Header={data.PlanName}
                />
              }
            </div>
          );
        })}
      </div>
      <Switch isToggled={isToggled} />
    </div>
  );
};

export default Plans;
