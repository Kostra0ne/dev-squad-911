import React, { Component } from "react";
import AppButton from "../AppButton";
import "../../styles/form.css";

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
          <label className="label" htmlFor="username">
            Username
          </label>
          <input className="input" name="username" id="username" type="text" />
        </div>
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

        <div className="form-control">
          <label className="label" htmlFor="avatar">
            Avatar
          </label>
          <input className="input" name="avatar" id="avatar" type="file" />
        </div>
        <div>
          <AppButton>Submit</AppButton>
        </div>
      </form>
    );
  }
}

export default FormSignup;
