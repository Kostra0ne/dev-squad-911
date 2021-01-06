import React from "react";
import "../styles/Pokemon.css";

const Pokemon = (props) => {
  const { pokemon, size, withName, onClick } = props;

  return (
    <div className="Pokemon" onClick={onClick}>
      <div
        className="Pokemon__image-container"
        style={{
          width: size === "lg" ? 120 : 64,
          height: size === "lg" ? 120 : 64,
        }}
      >
        <img
          className="Pokemon__image"
          src={pokemon.picture}
          alt={pokemon.name}
        />
      </div>
      {withName && <p>{pokemon.name}</p>}
    </div>
  );
};

export default Pokemon;
