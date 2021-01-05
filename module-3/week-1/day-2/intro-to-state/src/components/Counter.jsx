import React from "react";

// function handleIncrement() {
//     console.log("I am clicking")
// }

// function handleDecrement() {
//   console.log("I have been clicked too !");
// }

class Counter extends React.Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       value: 0,
  //     };

  //     this.handleIncrement = this.handleIncrement.bind(this);
  //   }

  state = {
    value: 0,
  };

  handleIncrement = () => {
    this.setState({ value: this.state.value + 1 });
    // console.log("I have been clicked !");
  };

  handleDecrement = () => {
    this.setState({ value: this.state.value - 1 });
  };

  render() {
    // let emoji;

    // if (this.state.value > 10) {
    //   emoji = "🥶";
    // } else emoji = "🥵";

    return (
      <div>
        <h1>{this.state.value}</h1>
        <button onClick={this.handleIncrement}>Increment</button>
        <button onClick={this.handleDecrement}>Decrement</button>
      </div>
    );
  }
}

export default Counter;
