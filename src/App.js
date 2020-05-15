
import React, { Component } from "react";
import KeypadNumbers from "./components/KeypadNumbers";
import CalculationField from "./components/CalculationField";

export default class App extends Component {  
  render() {  
    return (
      <div className="mighty-calc">
        <CalculationField />
        <KeypadNumbers />    
      </div>
    );
  }
}

