import React from "react";
import Counter from "./components/Counter";
import "./App.css";

class App extends React.Component {
  state = {
    showCounter: true,
  };

  handleCounterDisplay = () => {
    this.setState({
      showCounter: !this.state.showCounter,
    });
  };
  render() {
    return (
      <div className="App">
        <button onClick={this.handleCounterDisplay}>Show counter</button>
        {this.state.showCounter && <Counter />}
      </div>
    );
  }
}

export default App;
