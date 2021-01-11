import React from "react";
import apiHandler from "../api/apiHandler";
import { withRouter } from "react-router-dom";

export const UserContext = React.createContext();

class UserProvider extends React.Component {
  state = {
    user: null,
    isLoading: true,
  };

  componentDidMount() {
    apiHandler
      .isLoggedIn()
      .then((apiRes) => {
        this.setState({ user: apiRes, isLoading: false });
      })
      .catch((error) => {
        this.setState({
          isLoading: false,
        });
        // console.log(error);
      });
  }

  signup = (data) => {
    console.log("Here");
    // console.log("Signup in Context");
    // console.log(data, "data in context");
    apiHandler
      .signup(data)
      .then((apiRes) => {
        // console.log(apiRes);
        this.props.history.push("/signin");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  signin = async (data) => {
    try {
      const toto = await apiHandler.signin(data);
      this.setState({ user: toto });
      this.props.history.push("/");
    } catch (error) {
      console.log(error);
    }

    // apiHandler
    //   .signin(data)
    //   .then((apiRes) => {
    //     console.log(apiRes);
    //     this.setState({ user: apiRes });
    //   })
    //   .catch((apiError) => {
    //     console.log(apiError);
    //   });
  };

  logout = () => {
    apiHandler.logout().then((apiRes) => {
      this.setState({ user: null });
      this.props.history.push("/profile");
    });
  };

  render() {
    // console.log(this.state.user);

    return (
      <UserContext.Provider
        value={{
          user: this.state.user,
          isLoggedIn: !!this.state.user,
          signin: this.signin,
          isLoading: this.state.isLoading,
          signup: this.signup,
          logout: this.logout,
        }}
      >
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

export default withRouter(UserProvider);
