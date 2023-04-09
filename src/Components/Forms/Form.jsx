import React, { useContext } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import { HiOutlineUser } from "react-icons/hi";
import { FormContext } from "../Context/FormContextProvider";
import SignUp from "../SignUp/SignUp";
import Personal from "../Personal/Personal";
import Terms from "../Terms/Terms";
import Address from "../Address/Address";
import Obligations from "../Obligations/Obligations";
import "./Form.css";

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

        <div className="mx-[8em] p-[8em] flex justify-center items-center">
          <p className="icon mx-[6em] my-[5em] border-black border-2 w-90 h-90 rounded-[50%]">
            <HiOutlineUser className="m-5  w-[80px] h-[80px] rounded-[50%] bg-transparent" />
          </p>
          {PageComponents()}
        </div>
        <div className="footer flex justify-center align-middle gap-[18rem] m-5 p-5">
          <span>
            <button
              hidden={state.Page == 0}
              className="PrevBtn w-[64px]
              h-[64px] text-[20px] border-y-[3px] border-x-[1.8px] border-slate-500 rounded-2xl hover:shadow-2xl"
              onClick={PrevPage}
            >
              <ArrowLeftIcon className="w-6 h-6 ml-5 transition-all hover:scale-[1.2] bg-transparent items-center" />
              Back
            </button>
          </span>
          <span>
            <button
              hidden={state.Page == FormHeader.length - 1}
              onClick={NextPage}
              className="NxtBtn w-[64px]
               h-[64px] text-[20px] border-y-[3px] border-x-[1.8px] border-slate-500 rounded-2xl hover:shadow-2xl"
            >
              <ArrowRightIcon className="w-6 h-6 ml-5 transition-all hover:scale-[1.2] bg-transparent items-center" />
              Next
            </button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Form;
