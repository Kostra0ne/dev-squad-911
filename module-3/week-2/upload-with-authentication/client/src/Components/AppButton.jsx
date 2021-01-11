import React from "react";
import "../styles/AppButton.css";

const AppButton = ({ variant, onClick, children }) => {
  const mainClass = `AppButton ${variant ? variant : "primary"}`;

  return (
    <button className={mainClass} onClick={onClick}>
      {children}
    </button>
  );
};

export default AppButton;
