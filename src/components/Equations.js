
import React, { Component } from "react";
import Button from "./Button";
import store from "./store";

export default class Equations extends Component {

  eq = OperationType => {
    store.newInput = `${store.curInput} ${OperationType} `;
  };

  equate = () => {
    store.newInput = eval(store.curInput);
  };

  render() {
    return (
      <section className="button-set--equations">
        <Button text="+" clickHandler={this.eq} />
        <Button text="-" clickHandler={this.eq} />
        <Button text="*" clickHandler={this.eq} />
        <Button text="/" clickHandler={this.eq} />
        <Button text="=" clickHandler={this.equate} />
      </section>
    ); 
  }
}

