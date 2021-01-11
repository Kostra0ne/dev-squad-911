import React, { Component } from "react";
import AppButton from "../AppButton";
import "../../styles/form.css";
import apiHandler from "../../api/apiHandler";
import { withRouter } from "react-router-dom";
import { UserContext } from "../../Auth/UserProvider";

class FormSignup extends Component {
  state = {
    user: {
      username: "",
      email: "",
      password: "",
      avatar: "",
    },
    error: {},
  };

  imageRef = React.createRef();

  static contextType = UserContext; // Subscribe to the context from a class

  // componentDidMount() {
  //   console.log(this.context);
  // }

  handleChange = (event) => {
    const key = event.target.name;
    const value = event.target.value;

    // this.setState({
    //   [key]: value,
    // });

    this.setState({
      user: {
        ...this.state.user,
        [key]: value,
      },
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // Submit....
    // console.log(this.state);

    const fd = new FormData();

    for (let key in this.state.user) {
      fd.append(key, this.state[key]);
    }

    fd.append("profileImage", this.imageRef.current.files[0]);
    this.context.signup(fd);

    // fd.append("username", this.state.username);
    // fd.append("password", this.state.password);
    // fd.append("email", this.state.email);
    // fd.append("profileImage", this.imageRef.current.files[0]);

    // console.log("Clicking...");

    // console.log(this.imageRef.current.files[0]);

    // console.log(this.context);
  };

  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <div className="form-control">
          <label className="label" htmlFor="username">
            Username
          </label>
          <input
            onChange={this.handleChange}
            value={this.state.user.username}
            className="input"
            name="username"
            id="username"
            type="text"
          />
        </div>
        <div className="form-control">
          <label className="label" htmlFor="email">
            Email
          </label>
          <input
            value={this.state.user.email}
            onChange={this.handleChange}
            className="input"
            name="email"
            id="email"
            type="email"
          />
        </div>
        <div className="form-control">
          <label className="label" htmlFor="password">
            Password
          </label>
          <input
            onChange={this.handleChange}
            className="input"
            value={this.state.user.password}
            name="password"
            id="password"
            type="password"
          />
        </div>

        <div className="form-control">
          <label className="label" htmlFor="avatar">
            Avatar
          </label>
          <input
            ref={this.imageRef} // Has to be ref={Something}
            className="input"
            name="avatar"
            id="avatar"
            type="file"
          />
        </div>
        <div>
          <AppButton>Submit</AppButton>
        </div>
      </form>
    );
  }
}

export default withRouter(FormSignup);
