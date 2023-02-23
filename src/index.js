import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "tachyons";
import { robotmodels } from "./models";
import TerminatorList from "./components/Terminator-list/terminator-list.component";
import Header from "./components/Header/header.component";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <Header />
    <TerminatorList robotmodelsProp={robotmodels} />
  </div>
);
