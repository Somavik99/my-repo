import React from "react";
import "./App.css";
// import ContextProvider from "./Components/Context/Context";
import Form from "./Components/Forms/Form";
import { FormContextProvider } from "./Components/Context/FormContextProvider";

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Form</h1>
      <FormContextProvider><Form /></FormContextProvider>
    </>
  );
}

export default App;
