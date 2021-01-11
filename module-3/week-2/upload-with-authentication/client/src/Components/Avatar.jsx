import React from "react";
import "../styles/Avatar.css";

const Avatar = ({ src }) => {
  return (
    <div className="Avatar">
      <img className="Avatar__image" src={src} alt="" />
    </div>
  );
};

export default Avatar;
