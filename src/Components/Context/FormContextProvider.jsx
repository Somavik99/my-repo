import React, { createContext } from "react";

const initialPage = { Page: 0 };
const FormContext = createContext(initialPage);

const FormContextProvider = ({ children }) => {
  return <FormContext.Provider>{children}</FormContext.Provider>;
};

export { FormContext, FormContextProvider };
