import React from "react";
import Card from "./Card";

/**
 *  You can compose components together.
 *  All the Card does is render a div with some styling.
 *
 */

function UserCard(props) {
  console.log("this is props", props);

  return (
    <Card borderRadius={100}>
      <div id="UserCard" className="UserCard">
        <h3>Username: {props.name}</h3>
        <h3>age: {props.age} </h3>
      </div>
    </Card>
  );
}

export default UserCard;
