import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import "./styles/variables.css";
import App from "./App";

import UserProvider from "./Auth/UserProvider";

ReactDOM.render(
  <BrowserRouter>
    <UserProvider>
      <App />
    </UserProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
