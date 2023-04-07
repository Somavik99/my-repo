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

  const FormHeader = [
    "Sign Up",
    "Personal Details",
    "Address",
    "Terms & conditions",
    "Obligations",
  ];
  const NextPage = () => dispatch({ type: "NEXT" });
  const PrevPage = () => dispatch({ type: "PREV" });

  const PageComponents = () => {
    if (state.Page === 0) {
      return <SignUp />;
    } else if (state.Page === 1) {
      return <Personal />;
    } else if (state.Page === 2) {
      return <Address />;
    } else if (state.Page === 3) {
      return <Terms />;
    } else if (state.Page === 4) {
      return <Obligations />;
    }
  };

  return (
    <div className="Form">
      <div className="Form_container">
        <div className="header flex justify-center align-middle text-[25px]">
          <h1>{FormHeader[state.Page]}</h1>
        </div>
        <div className="body m-5 p-5 flex justify-center align-middle ">
          {PageComponents()}
        </div>
        <div className="footer flex justify-center align-middle gap-[18rem] m-5 p-5">
          <span>
            <button
              disabled={state.Page == 0}
              className="w-2 h-2"
              onClick={PrevPage}
            >
              <ArrowLeftIcon className="w-5 h-5" />
              Back
            </button>
          </span>
          <span>
            <button
              disabled={state.Page == FormHeader.length - 1}
              onClick={NextPage}
            >
              <ArrowRightIcon className="w-5 h-5" />
              Next
            </button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Form;
