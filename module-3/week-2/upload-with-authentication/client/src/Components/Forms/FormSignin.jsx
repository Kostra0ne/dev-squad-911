import React, { Component } from "react";
import "../../styles/form.css";
import AppButton from "../AppButton";
import apiHandler from "../../api/apiHandler";
import { UserContext } from "../../Auth/UserProvider";

class FormSignup extends Component {
  state = {
    // user: {
    email: "toto2@gmail.com ",
    password: "toto",
    // },
  };

  static contextType = UserContext;

  handleChange = (event) => {
    const key = event.target.name;
    const value = event.target.value;

    this.setState({
      [key]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    this.context.signin({
      email: this.state.email,
      password: this.state.password,
    });
  };

  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <div className="form-control">
          <label className="label" htmlFor="email">
            Email
          </label>
          <input
            onChange={this.handleChange}
            className="input"
            name="email"
            id="email"
            type="email"
            value={this.state.email}
          />
        </div>
        <div className="form-control">
          <label className="label" htmlFor="password">
            Password
          </label>
          <input
            onChange={this.handleChange}
            className="input"
            name="password"
            id="password"
            type="password"
            value={this.state.password}
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
