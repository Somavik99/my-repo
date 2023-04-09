import React from "react";

const Personal = () => {
  return (
    <div className="">
      <div>
        <p><label htmlFor="Edu">Education</label></p>
        <input type="text" name="Edu" placeholder="Enter Degree..." />
      </div>
        <div className="date m-4 p-8 flex-initial">
          <p><label htmlFor="dob">Date Of Graduating</label></p>
        <input type="date" name="" id="" />
      </div>
      <div>
        <p>
          <label htmlFor="Resume">Upload your Resume</label>
        </p>
        <p>
          <input type="file" name="resume"/>
        </p>
      </div>
      <div className="options">
        <label htmlFor="gender">Gender</label>
        <p>
          <select name="gender" id="">
            <option value="">Male</option>
            <option value="">Female</option>
            <option value="">Other</option>
          </select>
        </p>
      </div>
    
    </div>
  );
};

export default Personal;
