import React, { useContext, useEffect } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import { FormContext } from "../Context/FormContextProvider";
import SignUp from "../SignUp/SignUp";
import Personal from "../Personal/Personal";
import Terms from "../Terms/Terms";
import Address from "../Address/Address";
import Obligations from "../Obligations/Obligations";

const Form = () => {
  const { state, dispatch } = useContext(FormContext);
  const PageComponents = [];
  PageComponents.push(<SignUp />);
  PageComponents.push(<Personal />);
  PageComponents.push(<Address />);
  PageComponents.push(<Terms />);
  PageComponents.push(<Obligations />);

  console.log(PageComponents);

  useEffect(()=>{
    PageComponents;
  },[])

  const FormHeader = [
    "Sign Up",
    "Personal Details",
    "Address",
    "Terms & conditions",
    "Obligations",
  ];
  const NextPage = () => dispatch({ type: "NEXT" });
  const PrevPage = () => dispatch({ type: "PREV" });
  return (
    <div className="Form">
      <div className="Form_container">
        <div className="header">
          <h1>{FormHeader[state.Page]}</h1>
        </div>
        <div className="body m-5 p-5">
          
        </div>
        <div className="footer">
          <button
            disabled={state.Page == 0}
            className="w-2 h-2"
            onClick={PrevPage}
          >
            <ArrowLeftIcon className="w-5 h-5" />
            Back
          </button>
        </div>
        <div>
          <button
            disabled={state.Page == FormHeader.length - 1}
            onClick={NextPage}
          >
            <ArrowRightIcon className="w-5 h-5" />
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;
