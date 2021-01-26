import React, { useState, useEffect } from "react";
import Container from "Components/Container";
// import Button from "Components/Button";

const Dependencies = (props) => {
  const [timer, setTimer] = useState(10);
  const [name, setName] = useState("");

  useEffect(() => {
    let intervalId = setInterval(() => {
      // console.log("vroom vroom");
      // console.log(timer);
      // setTimer(timer +1 )
      setTimer((foo) => {
        return foo + 1;
      });
    }, 1000);

    return () => {
      clearInterval(intervalId); // Will be executed when the component unmounts
    };
  }, []); // componentDidMount()

  useEffect(() => {
    return () => {
      console.log("Heeey i'm unmounting...");
    };
  }, []);

  // useEffect(() => {
  //   let intervalId = setInterval(() => {
  //     setTimer(timer + 1);
  //   }, 1000);

  //   return () => {
  //     console.log(
  //       "I am being called everytime that the timer is being changed"
  //     );
  //     clearInterval(intervalId); // Will be executed when the component unmounts
  //   };
  // }, [timer]);

  useEffect(() => {
    return () => {
      console.log("I am a goner");
    };
  }, []); // This is the componentWillUnMount

  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <Container>
      <h1>{timer}</h1>
      <h2>{name}</h2>
      <input type="text" value={name} onChange={handleChange} />
    </Container>
  );
};

export default Dependencies;
