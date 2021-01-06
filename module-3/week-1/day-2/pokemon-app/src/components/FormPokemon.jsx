import React, { Component } from "react";
import RoundBox from "./RoundBox";
import "../styles/forms.css";
import pokemonsFromJSON from "../data/pokemon.json";

class FormPokemon extends Component {
  state = {
    name: "",
    picture: "",
  };

  handleChange = (event) => {
    const key = event.target.name;
    const value = event.target.value;
    this.setState({
      [key]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    this.props.handleSubmitFromParent({
      name: this.state.name,
      picture: this.state.picture,
    });

    this.setState({
      name: "",
      picture: "",
    });
  };

  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <h3 className="form__title">Create pokemon</h3>

        <div className="form__control">
          <label className="form__label">Name</label>
          <input
            className="form__input"
            name="name"
            value={this.state.name}
            type="text"
            onChange={this.handleChange}
          />
        </div>
        <div className="form__control">
          <label className="form__label">Image</label>
          <input
            className="form__input"
            name="picture"
            value={this.state.picture}
            type="text"
            onChange={this.handleChange}
          />
        </div>

        <button className="form__button">Submit</button>
      </form>
    );
  }
}

export default FormPokemon;
