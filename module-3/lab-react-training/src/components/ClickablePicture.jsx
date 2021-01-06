import React, { Component } from 'react';

class ClickablePicture extends Component {
  state = {
    isClicked: false,
  };

  handleClick = (event) => {
    this.setState({ isClicked: !this.state.isClicked });
  };

  render() {
    const { img, imgClicked } = this.props;

    return (
      <div onClick={this.handleClick}>
        <img src={this.state.isClicked ? img : imgClicked} alt="mc 100s" />
        {/* 
        {!this.state.isClicked && <img src={img} alt="Mc" />}
        {this.state.isClicked && <img src={imgClicked} alt="100s" />} */}
      </div>
    );
  }
}

export default ClickablePicture;
