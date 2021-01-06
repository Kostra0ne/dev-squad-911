import React from "react";
import RoundBox from "./RoundBox";
import pokemonsFromJSON from "../data/pokemon.json";
import FormPokemon from "./FormPokemon";
import Pokemon from "./Pokemon";
import Select from "./Select";
import "../styles/Pokemons.css";

class Pokemons extends React.Component {
  state = {
    pokedex: [],
    displayForm: false,
    pokemons: pokemonsFromJSON,
    filteredPokemons: pokemonsFromJSON,
    selectedValue: "",
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

  handleSort = () => {
    this.setState({
      filteredPokemons: [...this.state.filteredPokemons].sort((a, b) =>
        a.name.localeCompare(b.name)
      ),
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

  handleFormDisplay = () => {
    this.setState({
      displayForm: !this.state.displayForm,
    });
  };

  handleAddNewPokemon = (value) => {
    this.setState({
      pokemons: [value, ...this.state.pokemons],
    });
  };

  handleFilter = (event) => {
    this.setState({
      filteredPokemons: this.state.pokemons.filter((pokemon) =>
        pokemon.type.includes(event.target.value)
      ),
    });
    // this.setState({
    //   selectedValue: event.target.value,
    // });
  };

  render() {
    return (
      <div className="Pokemons">
        <div className="Pokemons_ball">
          <RoundBox value={this.state.pokemons.length} />
        </div>

        <div>
          {/* {!this.state.displayForm && (
            <button
              className="Pokemons__button"
              onClick={this.handleFormDisplay}
              >
              Create a Pokemon !
            </button>
          )} */}
          <FormPokemon handleSubmitFromParent={this.handleAddNewPokemon} />
        </div>

        <div className="d-flex space-around">
          <div className="Pokemons__pokedex">
            <h2>Your pokemons</h2>

            <div className="Pokemons__pokedex__pokemons">
              {this.state.pokedex.map((pokemon) => (
                <Pokemon
                  key={pokemon.id}
                  pokemon={pokemon}
                  size="lg"
                  onClick={() => this.removePokemon(pokemon.id)}
                />
              ))}
            </div>
          </div>
          <div className="Pokemons__to-catch">
            <h2>The pokemons to catch</h2>

            <div className="Pokemons__filter">
              <Select handleFilterFromParent={this.handleFilter} />
              <button onClick={this.handleSort}>Sort by name</button>
            </div>

            <div className="Pokemons__to-catch__pokemons">
              {this.state.filteredPokemons.map((pokemon) => (
                <Pokemon
                  key={pokemon.id}
                  withName={true}
                  pokemon={pokemon}
                  onClick={() => this.addPokemon(pokemon)}
                />
              ))}
            </div>
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
