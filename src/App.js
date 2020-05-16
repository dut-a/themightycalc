
import React, { Component } from "react";
import KeypadNumbers from "./components/KeypadNumbers";
import CalculationField from "./components/CalculationField";
import RecallView from "./components/RecallView";
import Equations from "./components/Equations";
import Functions from "./components/Functions";

export default class App extends Component {  
  render() {  
    return (
      <div className="mighty-calc">
        <CalculationField />
        <RecallView />
        <KeypadNumbers />
        <Functions />
        <Equations />
      </div>
    );
  }
}

