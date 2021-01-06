import React, { Component } from "react";
import "./form.css";

class Form extends Component {
  state = {
    firstName: "",
    lastName: "",
    username: "",
    isDeveloper: false,
    error: {},
  };

  // handleFirstName = (event) => {
  //   // console.log(event.target.value);
  //   // console.log("I am changing...");
  //   this.setState({
  //     firstName: event.target.value,
  //   });
  // };

  // handleLastName = (event) => {
  //   this.setState({
  //     lastName: event.target.value,
  //   });
  // };

  handleUserName = (event) => {
    this.setState({
      username: event.target.value,
    });
  };

  handleChange = (event) => {
    // console.log(event.target.id);
    // console.dir(event.target);
    // const key = event.target.name; // lastName
    // const value = event.target.value;
    // console.log(value);
    // console.log(event.target.type);

    // if (event.target.type === "checkbox") {
    //   this.setState({
    //     [event.target.name]: event.target.checked,
    //   });
    // } else {
    //   this.setState({
    //     [event.target.name]: event.target.value,
    //   });
    // }

    const value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;

    const name = event.target.name;
    this.setState({ [name]: value });
  };

  // isLongEnough(value) {
  //   return value.length > 6;
  // }

  handleSubmit = (event) => {
    event.preventDefault(); // Cancels the default behaviour of a submit button in a form
    // which is to make a get request and refresh the page.

    // Process your state before posting....
    // If there are any errors
    // this.setState({
    //   error: {
    //     firstName: true,
    //   },
    // });

    // return;

    // Making your post....
    console.log(this.state);

    // this.setState({
    //   firstName: "",
    //   lastName: "",
    //   username: "",
    //   isDeveloper: false,
    // });
  };

  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <div className="form__control">
          <label className="form__label">First name</label>
          <input
            id="firstName"
            name="firstName"
            value={this.state.firstName}
            onChange={this.handleChange}
            className="form__input"
            type="text"
          />
          {this.state.error.firstName && <p>Error message</p>}
          {/* {!this.isLongEnough(this.state.firstName) && (
            <p style={{ color: "red" }}>
              The first name needs to be of 6 or more characters
            </p>
          )} */}
        </div>

        <div className="form__control">
          <label className="form__label">Last name</label>
          <input
            id="lastName"
            name="lastName"
            value={this.state.lastName}
            onChange={this.handleChange}
            className="form__input"
            type="text"
          />
        </div>

        <div className="form__control">
          <label className="form__label">Username</label>
          <input
            id="username"
            name="username"
            value={this.state.username}
            onChange={this.handleChange}
            className="form__input"
            type="text"
          />
        </div>

        <div className="form__control">
          <label className="form__label">Are you a developer ?</label>
          <input
            className="form__input"
            type="checkbox"
            value={this.state.isDeveloper}
            name="isDeveloper"
            onChange={this.handleChange}
          />
        </div>

        <button className="form__button">Submit</button>
      </form>
    );
  }
}

export default Form;
