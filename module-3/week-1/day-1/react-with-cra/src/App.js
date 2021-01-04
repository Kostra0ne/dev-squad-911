import React from "react";
import "./App.css";
import { sayHello } from "./utils";

import champagneImage from "./assets/images/champagne.jpeg";

// console.log(sayHell);
// function sayHello() {
//   return "Hello toto";
//   // return 2;
//   // return "Hello people";
// }

function emoji(value) {
  if (value > 10) {
    return "👋";
  } else {
    return "🤲";
  }
}
const username = "Toto Barbaz.";

const student = {
  firstName: "Foo",
  lastName: "Bar",
};

const user = {
  accessLevel: "admin",
};

function App() {
  if (user.accessLevel !== "admin") {
    return null;
  }

  const friends = [<div>Andy</div>, <div>Vincent</div>, <div>Fanny</div>];
  // return friends;

  return (
    <div className="App">
      <h2>Hello world</h2>
      <p>You have to use className instead of class</p>
      <p>All self closing elements must end with {"/>"} </p>

      <h2>Importing assets</h2>
      <p>From the public folder</p>
      <img className="image" src="/assets/images/picture.jpeg" alt="" />

      <p>From the src folder</p>
      <img className="image" src={champagneImage} alt="" />

      <h2>Inserting values inside jsx</h2>
      <p>Username: {username}</p>
      <p>Username: {"John Lennon"}</p>
      <p>Value: {2 + 1}</p>
      <p>A function: {sayHello()}</p>
      <p>A function: {emoji(11)}</p>
      <p>A function: {emoji(9)}</p>

      <h2>Objects do not work in JSX expression</h2>
      {/* <p>
        student name: {student}
      </p> */}
      <p>
        student name:{student.firstName} {student.lastName}
      </p>

      <h2>But arrays do !</h2>

      <p>{[2, 1, 3, 4]}</p>
      <p>{friends}</p>

      <h2>These values are not rendered in the DOM</h2>
      <p>{null}</p>
      <p>{undefined}</p>
      <p>{false}</p>
      <h2>{true}</h2>

      <h2>Any other values will be rendered</h2>
      <p>{NaN}</p>
      <p>{0}</p>
    </div>
  );
}

export default App;
