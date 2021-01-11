import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./views/Home";
import About from "./views/About";
import Profile from "./views/Profile";
import NotFound from "./views/NotFound";
import NavMain from "./Components/NavMain";
import Signin from "./views/Signin";
import Signup from "./views/Signup";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <div className="App_navigation">
        <NavMain />
      </div>
      <div className="App__content">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/about" component={About} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/signin" component={Signin} />
          <Route path="*" component={NotFound} />
        </Switch>
      </div>
    </div>
  );
};

export default App;
