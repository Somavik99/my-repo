import React from "react";
import "./Personal.css";

const Personal = () => {
  return (
    <div className="p-8 my-[-5em]">
      <div>
        <p>
          <label htmlFor="Address">Address</label>
        </p>
        <p>
          <input
            type="text"
            name="Addr"
            placeholder="Address..."
            className="outline-0 border-l-[5px] border-gray-800/80 hover:border-blue-900/80 border-r-[5px]  border-y-[1px] m-2 p-2 rounded-lg"
          />
        </p>
      </div>
      <div>
        <p>
          <label htmlFor="Edu">Education</label>
        </p>
        <input
          type="text"
          name="Edu"
          className="outline-0 border-l-[5px] border-gray-800/80 hover:border-blue-900/80 border-r-[5px]  border-y-[1px] m-2 p-2 rounded-lg"
          placeholder="Enter Degree..."
        />
      </div>
      <div className="date  flex-initial">
        <p>
          <label htmlFor="dob">Date Of Graduating</label>
        </p>
        <input
          type="date"
          name="date"
          className="outline-0 border-l-[5px] border-gray-800/80 hover:border-blue-900/80 border-r-[5px]  border-y-[1px] m-2 p-2 rounded-lg"
        />
      </div>
      <div>
        <p>
          <label htmlFor="Resume">Upload your Resume</label>
        </p>
        <p>
          <input
            type="file"
            name="resume"
            className="outline-0 border-l-[5px] border-gray-800/80 hover:border-blue-900/80 border-r-[5px]  border-y-[1px] m-2 p-2 rounded-lg w-40"
          />
        </p>
      </div>
      <div className="options">
        <label htmlFor="gender">Gender</label>
        <p>
          <select
            name="gender"
            className="outline-0 border-l-[5px] border-gray-800/80 hover:border-blue-900/80 border-r-[5px]  border-y-[1px] m-2 p-2 rounded-lg"
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </p>
      </div>
    </div>
  );
};

export default Personal;
