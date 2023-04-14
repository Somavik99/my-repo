import React, { useState } from "react";
import Switch from "./Switch/Switch";
import Card from "./Card/Card";


const Plans = () => {
  const [Toggled, setToggled] = useState(false);

  const isToggled = () => {
    return setToggled((Toggled) => !Toggled);
  };

  return (
    <div>
      <div className="SwitchCase">
        <div>
          <Card Toggled={Toggled} />
        </div>
        
      </div>
      <Switch isToggled={isToggled}/>
    </div>
  );
};

export default Plans;
