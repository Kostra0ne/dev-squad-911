import React from "react";
import "./App.css";
import NavMain from "./components/NavMain";
import Pokemons from "./components/Pokemons";

function App() {
  return (
    <div className="App">
      <NavMain />
      <div className="App__content">
        <Pokemons />
      </div>
    </div>
  );
}

export default App;