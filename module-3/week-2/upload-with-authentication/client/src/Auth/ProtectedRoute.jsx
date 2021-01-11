import React from "react";
import { Redirect, Route } from "react-router-dom";
import { withUser } from "../Auth/withUser";

const ProtectedRoute = ({ component: Component, context, ...rest }) => {
  if (context.isLoading) {
    return null;
  }

  if (context.isLoggedIn) {
    return <Route {...rest} component={Component} />;
  } else {
    return <Redirect to="/signin" />;
  }
};

export default withUser(ProtectedRoute);
