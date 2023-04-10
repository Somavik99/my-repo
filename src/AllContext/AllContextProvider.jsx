import React, { createContext, useState } from "react";

const AllPageContext = createContext();
const AllContextProvider = ({ children }) => {
  const [FromData, setFromData] = useState({
    user: "",
    email: "",
    pass: "",
    cPass: "",
    Addr: "",
    Edu: "",
    date: "",
    resume: "",
    gender: "",
  });
  return <AllPageContext.Provider>{children}</AllPageContext.Provider>;
};

export { AllContextProvider, AllPageContext };
