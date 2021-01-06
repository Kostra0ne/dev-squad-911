import React from "react";
import pokemons from "../data/pokemon.json";

class Select extends React.Component {
  // state = {
  //   selectedValue: "",
  // };

  // handleFilter = (event) => {
  //   this.setState({
  //     selectedValue: event.target.value,
  //   });
  // };

  render() {
    return (
      <select name="type" onChange={this.props.handleFilterFromParent}>
        <option value="">Select a type</option>
        <option value="Water">Water</option>
        <option value="Fire">Fire</option>
        <option value="Grass">Grass</option>
      </select>
    );
  }
}

export default Select;
