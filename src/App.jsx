import React from "react";
import "./App.css";
// import ContextProvider from "./Components/Context/Context";
import Form from "./Components/Forms/Form";
import { FormContextProvider } from "./Components/Context/FormContextProvider";
import { Fade } from "react-awesome-reveal";
import "./App.css";

function App() {
  return (
    <div className=" ">
      <Fade
        damping={1e-1}
        delay={2e3}
        className="Blog h-11 text-3xl flex justify-center items-center font-bold rounded-[0.5em] border-2 outline-none hover:border-blue-600  align-middle m-10 mx-[22.8em] w-[30%]"
      >
        Blog Registration Form
      </Fade>
      <FormContextProvider>
        <Form />
      </FormContextProvider>
    </div>
  );
}

export default App;
