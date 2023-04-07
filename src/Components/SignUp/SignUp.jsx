import React, { useEffect, useRef } from "react";

const SignUp = () => {
  const inputRef = useRef(null)
  useEffect(()=>{
    inputRef.current.focus();
  },[])
  return (
    <div >
      <div>
        <input
          type="text"
          ref={inputRef}
          className="name outline-0 border-l-[5px] border-gray-800 hover:border-gradient-to-rborder-blue-500 border-r-[5px]  border-t-2 border-b-2 m-2 p-2 rounded-lg"
          placeholder="name..."
        />
      </div>
      <div>
        <input
          type="email"
          className="email outline-0 border-l-[5px]  border-r-[5px]  border-t-2 border-b-2 m-2 p-2 rounded-lg "
          placeholder="Email..."
        />
      </div>
      <div>
        <input
          type="password"
          className="pass outline-0 border-l-[5px]  border-r-[5px] border-t-2 border-b-2 m-2 p-2 rounded-lg"
          placeholder="Password..."
        />
      </div>
      <div>
        <input
          type="password"
          className="cPass outline-0 border-l-[5px]  border-r-[5px] border-t-2 border-b-2 m-2 p-2 rounded-lg"
          placeholder="Confirm Password..."
        />
      </div>
    </div>
  );
};

export default SignUp;
