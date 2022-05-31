import React, {useState} from 'react';
import PokemonList from './PokemonList';

function App() {
  const [pokemon, setPokemon] = useState(["bulbasaur", "ivysaur"])
  return (
    
    // render lists of Pokemon
    <PokemonList pokemon={pokemon}/>
  );
}

export default App;
