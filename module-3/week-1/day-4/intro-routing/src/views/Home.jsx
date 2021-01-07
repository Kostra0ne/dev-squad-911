import React from "react";

const Home = (props) => {
  return (
    <div>
      <h2>I am the home</h2>
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </div>
  );
};

export default Home;
