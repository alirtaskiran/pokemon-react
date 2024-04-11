import "./App.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useState, useEffect } from "react";

function App() {

  const baseURL = "https://pokeapi.co/api/v2";
  const imageBaseUrl = "https://img.pokemondb.net/artwork";
  const listLimit = 30;

  useEffect(() => {
    getTypes();
    getAllPokemon();
  });

  const getTypes = async () => {
    if (localStorage.getItem("types"))
      // ilk açılışta localstorage'da varsa oradan al
      return JSON.parse(localStorage.getItem("types"));

    const response = await fetch(`${baseURL}/type`); // yoksa api'den al
    const data = await response.json();
    const results = data.results;
    localStorage.setItem("types", JSON.stringify(results)); // aldığın veriyi localstorage'a kaydet
    return results;
  }

  const getAllPokemon = async () => {
    if(localStorage.getItem("pokemons")) // ilk açılışta localstorage'da varsa oradan al
    return JSON.parse(localStorage.getItem("pokemons"));  

  const response = await fetch(`${baseURL}/pokemon?offset=0&limit=10000`); // yoksa api'den al
  const data = await response.json();
  let results = data.results; // pokemon listesi, result'ın içinde

  results = await Promise.all(results.map(async pokemon => { // her bir pokemon promisi için beklet 
    const name = pokemon.name;
    const details = await getPokemonByName(name); 
    pokemon.types = details.types.map(type => type.type.name); // pokemon'un types'ını ekle
    return pokemon;
  }));

  localStorage.setItem("pokemons", JSON.stringify(results)); // aldığın veriyi localstorage'a kaydet
  return results;
  }

  const getPokemonByName = async (name) => {
    const response = await fetch(`${baseURL}/pokemon/${name}`);
    const data = await response.json();
    return data;
  }



  return (
    <div className="App">
      <Navbar></Navbar>
      <Footer></Footer>
    </div>
  );
}

export default App;
