
import React, { Component } from "react";
import EditableField from "./EditableField";

import EventEmitter from "EventEmitter";
const ee = new EventEmitter();

class CalculationField extends Component {
  constructor(props) {
    super(props);
    props.text = props.text || '0';
    this.state = {text: props.text};
  }

  updateField = (newStr) => {
    newStr = newStr.split ? newStr.split(' ').reverse().join(' ') : newStr;
    return this.setState({text: newStr});
  };

  componentWillMount() {
    ee.addListener('numberCruncher', this.updateField);
  }

  render() {    
    return <EditableField text={this.state.text} initEdit="false" spellcheck="false" clickHandler={this.clickBait} />
  }
}

export default CalculationField;

