import React from "react";
import "../styles/RoundBox.css";

const RoundBox = ({ children }) => {
  return (
    <div className="RoundBox">
      <div className="RoundBox__top"></div>
      <div className="RoundBox__bottom"></div>
      <div className="RoundBox__line"></div>
      <div className="RoundBox__circle-middle"></div>
      <div className="RoundBox__badge"></div>
      <div className="RoundBox__content">{children}</div>
    </div>
  );
};

export default RoundBox;
