import React from "react";
// import pokemons from "../data/pokemon.json";
import "../styles/RoundBox.css";

const RoundBox = (props) => {
  return (
    <div className="RoundBox">
      <div className="RoundBox__top"></div>
      <div className="RoundBox__bottom"></div>
      <div className="RoundBox__line"></div>
      <div className="RoundBox__circle-middle"></div>
      <div className="RoundBox__content">{props.value}</div>
    </div>
  );
};

export default RoundBox;
