import React from "react";
import "./App.css";
// import ContextProvider from "./Components/Context/Context";
import Form from "./Components/Forms/Form";
import { FormContextProvider } from "./Components/Context/FormContextProvider";
import { Fade } from "react-awesome-reveal";

function App() {
  return (
    <>
      <Fade
        damping={1e-1}
        delay={2e3}
        className="text-3xl font-bold flex justify-center align-middle m-10"
      >
        Registration Form
      </Fade>
      <FormContextProvider>
        <Form />
      </FormContextProvider>
    </>
  );
}

export default App;
