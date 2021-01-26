import React, { useState, useEffect } from "react";
import Card, { Title } from "Components/Card";
import Button from "Components/Button";

const HookCounter = (props) => {
  const [counter, setCounter] = useState(0);

  // console.log("I am rendering...");

  function handleDecrement() {
    setCounter((counterState) => {
      console.log(counterState, "previous counter state");
      return counterState + 1;
    });
  }

  function handleIncrement() {
    // setCounter({ counter: counter + 1 });
    setCounter(counter + 1);
  }

  // useEffect(() => {
  //   console.log("I am an effect");
  // });

  useEffect(() => {
    console.log("I have mounted !");
    // your api call t o get some pokemons
  }, []); // componentDidMount

  useEffect(() => {
    console.log("I am being updated !");
  }, [counter]); // array of dependencies  ""componentDidUpdate""
  // console.log("I am rendering");

  return (
    <Card className="text-align-center m-2" theme="dark">
      <Title className="h3">Hook Counter</Title>

      <hr />
      <div>
        <Button type="danger" className="m-2" onClick={handleDecrement}>
          Decrement
        </Button>

        <Button type="primary" className="m-2" onClick={handleIncrement}>
          Increment
        </Button>
      </div>

      <h3>Counter value:</h3>

      <p className="hero"> {counter} </p>
    </Card>
  );
};

export default HookCounter;
