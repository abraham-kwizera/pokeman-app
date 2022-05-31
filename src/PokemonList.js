import React from 'react'

export default function PokemonList({ pokemon }) {
  return (
    <div>
      {pokemon.map(pokemonItem => (
        <div key={pokemonItem}>
          {pokemonItem}
        </div>
      ))}
        
    </div>
  )
}
