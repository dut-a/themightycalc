
import React, { Component } from "react";
import KeypadNumbers from "./components/KeypadNumbers";

export default class App extends Component {  
  render() {  
    return (
      <div className="mighty-calc">
        <KeypadNumbers />    
      </div>
    )
  }
}

