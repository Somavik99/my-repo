import React from "react";
import "./Switch.css";
import cx from "classnames";

const Switch = ({ rounded=true , isToggled, onToggle }) => {
  const Switch_sliderCX = cx("Switch_slider", {
    rounded:rounded
  });

  return (
    <div>
      <label className="Switch">
        <input type="checkbox" onClick={isToggled} checked={onToggle} />
        <span className={Switch_sliderCX} />
      </label>
    </div>  
  );
};

export default Switch;
