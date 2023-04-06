import React, { useContext, useState } from "react";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";
import { FormContext } from "../Context/FormContextProvider";


const Form = () => {
  const {Page} = useContext(FormContext)
  const [FormPage, setFormPage] = useState(0);
  const FormHeader = [
    "Sign Up",
    "Personal Details",
    "Address",
    "Terms & conditions",
  ];
  const NextPage = () => {};
  return (
    <div className="Form">
      <div className="Form_container">
        <div className="header">
          <h1>{FormHeader[FormPage]}</h1>
        </div>
        <div className="body">
        <div><input type="text" /></div>  
        <div><input type="email" /></div>  
        <div><input type="password" /></div>  
        </div>
        <div className="footer">
          <button className="w-2 h-2">
            <ArrowLeftIcon className="w-5 h-5" />
            Back
          </button>
        </div>
        <div>
          <button onClick={NextPage}>
            <ArrowRightIcon className="w-5 h-5" />
            Next
          </button>
        </div>
      </div>
    </div>

  );
};

export default Form;
