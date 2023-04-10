import React, { useEffect, useRef } from "react";
import { Bounce } from "react-awesome-reveal";

const SignUp = () => {
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <Bounce cascade>
      <div>
        <div>
          <input
            type="text"
            ref={inputRef}
            name="user"
            className="name outline-0 border-l-[5px] border-gray-800/80 hover:border-blue-900/80 border-r-[5px]  border-y-[1px] m-2 p-2 rounded-lg"
            placeholder="name..."
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            className="email outline-0 border-l-[5px]  border-gray-800/80 hover:border-blue-900/80 border-r-[5px]  border-y-[1px] m-2 p-2 rounded-lg "
            placeholder="Email..."
          />
        </div>
        <div>
          <input
          name="pass"
            type="password"
            className="pass outline-0 border-l-[5px] border-gray-800/80 hover:border-blue-900/80 border-r-[5px]  border-y-[1px] m-2 p-2 rounded-lg"
            placeholder="Password..."
          />
        </div>
        <div>
          <input
          name="cPass"
            type="password"
            className="cPass outline-0 border-l-[5px]  border-gray-800/80 hover:border-blue-900/80 border-r-[5px]  border-y-[1px] m-2 p-2 rounded-lg"
            placeholder="Confirm Password..."
          />
        </div>
      </div>
    </Bounce>
  );
};

export default SignUp;
