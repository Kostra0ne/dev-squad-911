import React from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../Auth/UserProvider";
import { withUser } from "../Auth/withUser";
import "../styles/NavMain.css";
import AppButton from "../Components/AppButton";
const NavMain = (props) => {
  return (
    <nav className="NavMain">
      {props.context.user && (
        <NavLink className="NavMain__link" exact to="/profile">
          User: {props.context.user.email}
        </NavLink>
      )}
      {props.context.isLoggedIn && (
        <NavLink className="NavMain__link" exact to="/profile">
          Profile
        </NavLink>
      )}
      <NavLink className="NavMain__link" exact to="/about">
        About
      </NavLink>
      {!props.context.isLoggedIn && (
        <NavLink className="NavMain__link" exact to="/signin">
          Signin
        </NavLink>
      )}
      {!props.context.isLoggedIn && (
        <NavLink className="NavMain__link" exact to="/signup">
          Signup
        </NavLink>
      )}
      {props.context.isLoggedIn && (
        <AppButton onClick={props.context.logout} variant="secondary">
          Logout
        </AppButton>
      )}
    </nav>
  );
};

export default withUser(NavMain);
// export default NavMain;
