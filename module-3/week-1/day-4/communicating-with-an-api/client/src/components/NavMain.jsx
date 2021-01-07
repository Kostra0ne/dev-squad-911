import React from "react";
import { NavLink } from "react-router-dom";

const NavMain = () => {
  return (
    <nav>
      <NavLink exact to="/">
        Home
      </NavLink>
      <NavLink exact to="/heroes">
        Heroes
      </NavLink>
      <NavLink exact to="/heroes/create">
        Forms
      </NavLink>
    </nav>
  );
};

export default NavMain;
