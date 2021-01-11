import React from "react";
import { NavLink } from "react-router-dom";

import "../styles/NavMain.css";

const NavMain = () => {
  return (
    <nav className="NavMain">
      <NavLink className="NavMain__link" exact to="/profile">
        Profile
      </NavLink>
      <NavLink className="NavMain__link" exact to="/about">
        About
      </NavLink>
      <NavLink className="NavMain__link" exact to="/signin">
        Signin
      </NavLink>
      <NavLink className="NavMain__link" exact to="/signup">
        Signup
      </NavLink>
    </nav>
  );
};

export default NavMain;
