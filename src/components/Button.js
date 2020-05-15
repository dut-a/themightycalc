
import React, { Component } from "react";

export default class Button extends Component {
  handleClick = () => {
    let text = this.props.text;
    let clickBox = this.props.clickHandler;
    if (clickBox) { clickBox.call(null, text); }
  }; 
  
  render() {
    return (
      <button className={this.props.kirass} onClick={this.handleClick}>
        <span className="title">{this.props.text}</span>
      </button>
    );
  }
};