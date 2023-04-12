import React from "react";
import "./Switch.css";
import cx from "classnames"

const Switch = ({ rounded = false, isToggled,  onToggle }) => {
const Switch_sliderCX = cx('Switch_slider',{
    'rounded':!rounded
})

  return (
    <div>
      <label className="Switch">
        <input type="checkbox" checked={isToggled} onChange={onToggle} />
        <span className={Switch_sliderCX} />
      </label>
    </div>
  );
};

export default Switch;
