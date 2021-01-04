import React from "react";

class ClassComponent extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div className="ClassComponent">
        <h1 className="ClassComponent__title">
          I am a class component ! {this.props.thisIsAProp}{" "}
          {this.props.children}
        </h1>
      </div>
    );
  }
}

export default ClassComponent;
