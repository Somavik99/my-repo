import React from "react";

const SignUp = () => {
  return (
    <div>
      <div>
        <input
          type="text"
          className="outline-0 border-l-[5px]  border-r-[5px]  border-t-2 border-b-2 m-2 p-2 rounded-lg"
          placeholder="name..."
        />
      </div>
      <div>
        <input
          type="email"
          className="outline-0 border-l-[5px]  border-r-[5px]  border-t-2 border-b-2 m-2 p-2 rounded-lg "
          placeholder="Email..."
        />
      </div>
      <div>
        <input
          type="password"
          className="outline-0 border-l-[5px]  border-r-[5px] border-t-2 border-b-2 m-2 p-2 rounded-lg"
          placeholder="Password..."
        />
      </div>
    </div>
  );
};

export default SignUp;
