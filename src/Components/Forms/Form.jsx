import React, { useContext } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import { FormContext } from "../Context/FormContextProvider";

const Form = () => {
  const { Page, state, dispatch } = useContext(FormContext);

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
          <div>
            <input
              type="text"
              className="outline-0 border-l-[5px]  border-r-[5px]  border-t-2 border-b-2 m-2 p-2 rounded-lg"
            />
          </div>
          <div>
            <input
              type="email"
              className="outline-0 border-l-[5px]  border-r-[5px]  border-t-2 border-b-2 m-2 p-2 rounded-lg "
            />
          </div>
          <div>
            <input
              type="password"
              className="outline-0 border-l-[5px]  border-r-[5px] border-t-2 border-b-2 m-2 p-2 rounded-lg"
            />
          </div>
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
