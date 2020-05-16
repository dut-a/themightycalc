
import React, { Component } from "react";
import Button from "./Button";
import store from "./store";
import EventEmitter from "EventEmitter";
const ee = new EventEmitter();

export default class Functions extends Component {

  toggleMemoryBank = () => ee.emitEvent('toggle-memories');
  cls = () => { store.newInput = 0; }

  clearContent = () => {
    let curInput = String(store.curInput);
    let lessOne = curInput.substring(0, (curInput.length - 1));
    return store.newInput = lessOne === '' ? 0 : lessOne;
  };

  render() {
    return (
      <section className="button-set--functions">
        <Button kirass="long-text" text="recall" clickHandler={this.toggleMemoryBank} />
        <Button kirass="long-text" text="clear" clickHandler={this.cls} />
        <Button text="&larr;" clickHandler={this.clearContent} />
      </section>
    )
  }
}

