import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import Heading from "./components/Heading";
import InputQuery from "./components/InputQuery";
import SubHeading from "./components/SubHeading";
import SubmitButton from "./components/SubmitButton";

ReactDOM.render(
  <>
    <App />
    <Heading />
    <InputQuery />
    <SubHeading />
    <SubmitButton />
  </>,
  document.getElementById("root")
);
