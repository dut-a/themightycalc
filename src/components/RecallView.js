
import React, { Component } from "react";

import EventEmitter from "EventEmitter";
import Button from "./Button";
import store from "./store";
const ee = new EventEmitter();

export default class RecallView extends Component {
  state = {show: false};

  toggleMemories = () => {
    this.setState({show: !this.state.show});
  };

  recallMemory = memory => {
    store.newInput = memory;
    ee.emitEvent('toggle-memories');
  };

  componentWillMount() {
    ee.addListener('toggle-memories', this.toggleMemories);
  }

  render() {
    let classNames = `memory-bank ${this.state.show ? 'visible' : ''}`;
    return (
      <section className={classNames}>
        <Button text="+" clickHandler={this.toggleMemories} kirass="toggle-close" />
        {store.curMemories.map(mem => {
          return (
            <Button kirass="block memory transparent" text={mem} clickHandler={this.recallMemory} />
          );
        })}
      </section>
    )
  }
}

