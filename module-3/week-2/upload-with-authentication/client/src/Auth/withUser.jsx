import React from "react";

import { UserContext } from "../Auth/UserProvider";

export const withUser = (ComponentToPassTheUserContextTo) => {
  return (props) => {
    return (
      <UserContext.Consumer>
        {(contextValue) => {
          return (
            <ComponentToPassTheUserContextTo
              {...props}
              context={contextValue}
            />
          );
        }}
      </UserContext.Consumer>
    );
  };
};
