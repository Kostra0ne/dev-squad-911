import React, { Component } from 'react';
import SingleColorPicker from './SingleColorPicker';

class RGBColorPicker extends Component {
  state = {
    rValue: 0,
    gValue: 0,
    bValue: 0,
  };

  myCallback = (color, value) => {
    if (color === 'r') {
      this.setState({
        rValue: value,
      });
    } else if (color === 'g') {
      this.setState({ gValue: value });
    } else {
      this.setState({ bValue: value });
    }

    // this.setState({
    //   [color + 'Value']: value,
    // });

    // this.setState({
    //   rValue: value,
    // });
  };

  render() {
    return (
      <div>
        <SingleColorPicker
          color="r"
          callback={this.myCallback}
          value={this.state.rValue}
        />
        <SingleColorPicker
          color="g"
          callback={this.myCallback}
          value={this.state.gValue}
        />
        <SingleColorPicker
          color="b"
          callback={this.myCallback}
          value={this.state.bValue}
        />

        <div
          style={{
            backgroundColor: `rgb(${this.state.rValue},${this.state.gValue},${this.state.bValue})`,
            width: 50,
            height: 50,
            border: '1px solid black',
          }}
        ></div>
      </div>
    );
  }
}

export default RGBColorPicker;
