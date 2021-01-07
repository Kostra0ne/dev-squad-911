import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
  };

  handleIncrement = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  handleDecrement = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  componentDidMount() {
    console.log("I have been mounted...");
    // this.intervalId = setInterval(() => {
    //   this.setState({
    //     count: this.state.count + 1,
    //   });
    // }, 1000);
  }

  componentDidUpdate() {
    console.log("I am being updated...");
  }

  componentWillUnmount() {
    console.log("I am dying...");
    clearInterval(this.intervalId);
  }

  startTimer = () => {
    this.intervalId = setInterval(() => {
      this.setState({
        count: this.state.count + 1,
      });
    }, 1000);
  };

  render() {
    // this.setState({});

    console.log("Rendering...");
    return (
      <div>
        <h2>{this.state.count}</h2>
        <button onClick={this.startTimer}>Start timer</button>
        <button onClick={this.handleIncrement}>Increment</button>
        <button onClick={this.handleDecrement}>Decrement</button>
      </div>
    );
  }
}

export default Counter;
