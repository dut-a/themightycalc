
const App = React.createClass({  
  render() {    
    return (
      <div className="mighty-calc">
        <SetupKeypadNumbers />    
      </div>
    )
  }
});
const Button = React.createClass({
  handleClick() {
    let text = this.props.text;
    let clickBox = this.props.clickHandler;
    if (clickBox) { clickBox.call(null, text); }
  },
  
  render() {
    return (
      <button className={this.props.kirass} onClick={this.handleClick}>
        <span className="title">{this.props.text}</span>
      </button>
    );
  }
});
const SetupKeypadNumbers = React.createClass({
  customNumber = num => {
    if (!store.curInput) {
      return store.newInput = num;
    }
    
    return store.newInput = `${store.curInput}${num}`;
  },
  
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
    )
  }
});

React.render(
  <App />,
  document.querySelector('#root')
);



