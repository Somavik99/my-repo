import React, { useContext } from "react";
import { CiUser } from "react-icons/ci";
import { FormContext } from "../Context/FormContextProvider";
import SignUp from "../SignUp/SignUp";
import Personal from "../Personal/Personal";
import Terms from "../Terms/Terms";
import Plans from "../Plans/Plans";
import Obligations from "../Obligations/Obligations";
import "./Form.css";

const Form = () => {
  const { state, dispatch } = useContext(FormContext);

  const FormHeader = [
    "Sign Up",
    "Personal Details",
    "Plans",
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
      return <Plans />;
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

        <div className="mx-[8em] p-[8em] flex justify-center items-center">
          <p className="icon mx-[6em] my-[5em] border-black border-2 w-90 h-90 rounded-[50%]">
            <CiUser className="m-5  w-[80px] h-[80px] rounded-[50%] bg-transparent" />
          </p>
          {PageComponents()}
        </div>
        <div className="footer flex justify-center align-middle gap-[18rem] m-5 p-5">
          <span>
            <button
              hidden={state.Page == 0 || state.Page === FormHeader.length - 1}
              className="NxtBtn w-[84px]
               h-[45px] text-[20px] border-y-[1.8px] border-x-[1.8px]  rounded-xl hover:shadow-2xl hover:shadow-gray-700"
              onClick={PrevPage}
            >
              Back
            </button>
          </span>
          <span>
            <button
              hidden={state.Page == FormHeader.length - 1}
              onClick={NextPage}
              className="NxtBtn w-[84px]
               h-[45px] text-[20px] border-y-[1.8px] border-x-[1.8px]  rounded-xl hover:shadow-2xl hover:shadow-gray-700"
            >
             Next 
            </button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Form;
