import React, { createContext, useReducer } from "react";

const initialPage = { Page: 0 };
const FormContext = createContext(initialPage);

let FormReducer = (state,action)=>{
switch(action.type){
  case "NEXT": return {...state, Page:state.Page+1 };
  case "PREV": 
    if("NEXT"){
    return{...state, Page:state.Page-1};
  }else{
    return Page;
  }
default:
  return;  
}
}

const FormContextProvider = ({ children }) => {
  const [state,dispatch] = useReducer(FormReducer,initialPage);
  return <FormContext.Provider value={{state,dispatch}}>{children}</FormContext.Provider>;
};

export { FormContext, FormContextProvider };
