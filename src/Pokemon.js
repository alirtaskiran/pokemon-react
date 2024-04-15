import React, { useState, useEffect } from "react";
import Box from './Box'; 

const baseURL = "https://pokeapi.co/api/v2";
const listLimit = 30;

const PokemonList = () => {
  const [nameFilter, setNameFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
  fetchInitialPokemons(); 
}, []);


  const fetchInitialPokemons = async () => {
    try {
      const response = await fetch(`${baseURL}/pokemon?offset=0&limit=10000`); 
      const data = await response.json();
      const initialPokemons = await Promise.all(data.results.map(async pokemon => {
        const details = await getPokemonByName(pokemon.name);
        pokemon.types = details.types.map(type => type.type.name);
        return pokemon;
      }));
      setPokemons(initialPokemons);
    } catch (error) {
      console.error('Error fetching initial pokemons:', error);
    }
  };
  

  const getPokemonByName = async (name) => {
    const response = await fetch(`${baseURL}/pokemon/${name}`);
    const data = await response.json();
    return data;
  };



  const listPokemons = () => {
    let filteredPokemons = pokemons;

    if (nameFilter) {
      filteredPokemons = pokemons.filter((pokemon) =>
        pokemon.name.includes(nameFilter)
      );
    }
    if (typeFilter) {
      filteredPokemons = filteredPokemons.filter((pokemon) =>
        pokemon.types.includes(typeFilter)
      );
    }
    if (filteredPokemons.length > listLimit) {
      filteredPokemons = filteredPokemons.slice(0, listLimit);
    }

    return filteredPokemons.map((pokemon) =>
    <Box name = {pokemon.name} types = {pokemon.types}></Box>
    );
  };

  return (
    <div>
      <div className="toolbar">
        <input
          type="text"
          placeholder="Name Filter"
          value={nameFilter}
          onChange={(e) => setNameFilter(e.target.value)}
          className="input"
        />
        <input
          type="text"
          placeholder="Type Filter"
          value={typeFilter}
          onChange={(e) => setTypeFilter(e.target.value)}
          className="input"
        />
      </div>
      <div className="content">
        <div className="grid">{listPokemons()}</div>
      </div>
    </div>
  );
};

export default PokemonList;
