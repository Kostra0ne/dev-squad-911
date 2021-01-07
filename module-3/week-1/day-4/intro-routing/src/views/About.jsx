import React from "react";
import { Link } from "react-router-dom";

const About = (props) => {
  return (
    <div>
      <h2>Hello master {props.user}</h2>
      <h2>I'm the about page</h2>

      <h2>
        Hey you should check out the <Link to="/">home page</Link>
      </h2>

      <pre>{JSON.stringify(props, null, 2)}</pre>
    </div>
  );
};

export default About;
