import React, { Component } from "react";
import "../../styles/form.css";
import AppButton from "../AppButton";

class FormSignup extends Component {
  state = {
    user: {
      username: "",
      email: "",
      password: "",
      avatar: "",
    },
  };

  handleChange = (event) => {
    const key = event.target.name;
    const value = event.target.value;

    this.setState({
      user: { [key]: value },
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // Submit....
  };

  render() {
    return (
      <form className="form">
        <div className="form-control">
          <label className="label" htmlFor="email">
            Email
          </label>
          <input className="input" name="email" id="email" type="email" />
        </div>
        <div className="form-control">
          <label className="label" htmlFor="password">
            Password
          </label>
          <input
            className="input"
            name="password"
            id="password"
            type="password"
          />
        </div>

        <div>
          <AppButton>Signin</AppButton>
        </div>
      </form>
    );
  }
}

export default FormSignup;
