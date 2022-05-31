import React, { useState } from "react";
import PokemonList from "./PokemonList";
import axios from "axios";

function App() {
  useState(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon").then(res => {
      setPokemon(res.data.results.map(output => output.name))
    });
  });

  const [pokemon, setPokemon] = useState([]);
  return (
    // render lists of Pokemon
    <PokemonList pokemon={pokemon} />
  );
}

export default App;
