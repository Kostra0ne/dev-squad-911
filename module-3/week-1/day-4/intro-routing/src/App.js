import React from "react";

import { Switch, Route, NavLink, Link } from "react-router-dom";
import Home from "./views/Home";
import About from "./views/About";
import Contacts from "./views/Contacts";
import "./App.css";

class App extends React.Component {
  state = {
    user: "toto",
  };

  render() {
    return (
      <div className="App">
        <nav className="NavMain">
          <NavLink className="link" exact to="/">
            Home
          </NavLink>
          <NavLink className="link" to="/about">
            About
          </NavLink>
          <NavLink className="link" to="/contact">
            Contact
          </NavLink>
        </nav>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            path="/about"
            render={(props) => {
              return <About {...props} user={this.state.user} />;
            }}
          />
          <Route
            exact
            path="/contact"
            render={() => <Contacts user={this.state.user} />}
          />
        </Switch>
        <footer>I am the footer</footer>
      </div>
    );
  }
}

export default App;
