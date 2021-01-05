import React from "react";
import RoundBox from "./RoundBox";
import pokemons from "../data/pokemon.json";

class Pokemons extends React.Component {
  state = {
    pokedex: [],
  };

  addPokemon = (pokemon, event) => {
    // console.log(pokemon);
    // console.log(event);
    // console.log("COnsole i have been clicked");
    /** Never do this DO NOT MUTATE STATE */
    // this.state.pokedex.push(pokemon);
    // this.setState({
    //   pokedex: this.state.pokedex
    // });

    // 1 solution
    // const copy = [...this.state.pokedex];
    // copy.push(pokemon);
    // this.setState({
    //   pokedex: copy,
    // });

    //2nd solution
    this.setState({
      pokedex: [pokemon, ...this.state.pokedex],
    });
  };

  removePokemon = (pokemon) => {
    // console.log(index);

    // 1st solution
    // const copy = [...this.state.pokedex];
    // copy.splice(index, 1);
    // this.setState({
    //   pokedex: copy,
    // });

    // console.log("I am being removed");

    //2nd solution

    // this.setState({
    //   pokedex: this.state.pokedex.filter((pokemon, i) => index !== i),
    // });

    this.setState({
      pokedex: this.state.pokedex.filter((p) => p.id !== pokemon.id),
    });
  };

  render() {
    console.log("I am rendering...");

    return (
      <div className="Pokemons">
        <RoundBox>10</RoundBox>
        {/* {list} */}

        <div className="d-flex">
          <div className="Pokemons__pokedex">
            <h2>Your pokemons</h2>
            {this.state.pokedex.map((pokemon, index) => {
              return (
                <div
                  onClick={() => this.removePokemon(pokemon)}
                  key={`pokedex ${pokemon.id}`}
                >
                  <h3> {pokemon.name}</h3>
                  {index % 2 === 0 && <p>The pokemon above is cool</p>}
                </div>
              );
            })}
          </div>
          <div>
            <h2>The pokemons to catch</h2>
            {pokemons.map((pokemon) => {
              return (
                <div
                  onClick={(event) => this.addPokemon(pokemon, event)}
                  key={pokemon.id}
                >
                  {pokemon.name}
                </div>
              );
            })}
          </div>
        </div>

        {/* {pokemons.map((pokemon, index) => {
          return (
            index % 2 === 0 && (
              <div
                key={pokemon.id}
                style={{
                  backgroundColor: index % 2 === 0 ? "red" : "dodgerblue",
                }}
              >
                {pokemon.name}
              </div>
            )
          );
        })} */}
      </div>
    );
  }
}

export default Pokemons;
