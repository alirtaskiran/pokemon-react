import React from 'react'

export default function Pokemon(pokemon) {
  return (
    <div className="box">
              <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" alt="" />
              <p className="name">{pokemon.name}</p>
              <p className="types">[Types]</p>
              <ul>
                <li>Grass</li>
                <li>Poison</li>
              </ul>
            </div>
  )
}
