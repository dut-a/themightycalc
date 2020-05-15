
import React, { Component } from "react";
import Button from "./Button";
import store from "./store";

export default class KeypadNumbers extends Component {
  customNumber = num => {
    if (!store.curInput) {
      return store.newInput = num;
    }
    return store.newInput = `${store.curInput}${num}`;
  };
  
  render() {
    return (
      <section className="btn-set-nums">
        <Button text="1" clickHandler={this.customNumber} />
        <Button text="2" clickHandler={this.customNumber} />
        <Button text="3" clickHandler={this.customNumber} />
        <Button text="4" clickHandler={this.customNumber} />
        <Button text="5" clickHandler={this.customNumber} />
        <Button text="6" clickHandler={this.customNumber} />
        <Button text="7" clickHandler={this.customNumber} />
        <Button text="8" clickHandler={this.customNumber} />
        <Button text="9" clickHandler={this.customNumber} />
        <Button text="0" clickHandler={this.customNumber} />
      </section>
    );
  }
}

