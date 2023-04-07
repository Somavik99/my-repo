import React from "react";
import "./App.css";
// import ContextProvider from "./Components/Context/Context";
import Form from "./Components/Forms/Form";
import { FormContextProvider } from "./Components/Context/FormContextProvider";

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold flex justify-center align-middle m-10">Registration Form</h1>
      <FormContextProvider><Form /></FormContextProvider>
    </>
  );
}

export default App;
