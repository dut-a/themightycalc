
import EventEmitter from "EventEmitter";

const ee = new EventEmitter();

let store = {
  input: 0,
  memory: [],

  get curInput() {
    return this.input;
  },

  get curMemories() {
    return this.memory.filter((m) => m !== undefined);
  },
  
  set commitMemory(input) {
    this.memory.push(input);
  },
  
  set newInput(str) {    
    let curInput = str;
    let oldInput = this.curInput;
    
    if (this.curMemories.indexOf(oldInput) === -1) {
      this.commitMemory = oldInput;
    }
    
    this.input = curInput;
    ee.emitEvent('numberCruncher', [this.curInput]);
  }
};

export default store;

