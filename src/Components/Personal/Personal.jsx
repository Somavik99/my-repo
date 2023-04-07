import React from "react";

const Personal = () => {
  return (
    <div className="">
        <div className="date m-4 p-8 flex-initial">
          <p><label htmlFor="dob">Date Of Birth</label></p>
        <input type="date" name="" id="" />
      </div>
      <span className="options">
        <label htmlFor="gender">Gender</label>
        <p>
          <select name="gender" id="">
            <option value="">Male</option>
            <option value="">Female</option>
            <option value="">Other</option>
          </select>
        </p>
      </span>
    
    </div>
  );
};

export default Personal;
