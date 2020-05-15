
import React, { Component } from "react";

export default class EditableField extends Component {
  handleClick = () => {
    const handler = this.props.clickHandler;
    if (handler) {
      handler.call(this);
    }
  };

  render() {
    return (
      <div className="editable-field" contentEditable={this.props.initEdit} spellcheck={this.props.spellCheck} onClick={this.handleClick}>
        {this.props.text}
      </div>
    )
  }
}

