import React from "react";
import "../styles/Card.css";

function Card(props) {
  let className = "Card";

  if (props.isDark) {
    className = `${className} Card--dark`;
  }

  return (
    <div
      style={{
        borderRadius: props.borderRadius,
      }}
      className={className}
    >
      <h1 className="Card__title">This is a title</h1>
      {props.children}
    </div>
  );
}

export default Card;
