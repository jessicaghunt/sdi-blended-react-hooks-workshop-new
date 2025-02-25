// import { useState } from 'react'
import React, { useEffect, useState } from 'react';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css';
import PokemonCard from './components/PokemonCard';
const API_URL = `https://pokeapi.co/api/v2/`;


function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(true);  
  const [error, setError] = useState(null);
  // const [count, setCount] = useState(0)
  useEffect(() => {
    async function fetchAllPokemon() {
      try {
        const pokemonPromises = Array.from({ length: 151 }, (_, i) => getPokemon(i + 1));
        // const pokemonPromises = Array.from({ length: 151}, (_, i)) => getPokemon(i + 1));
        const pokemons = await Promise.all(pokemonPromises);
        setPokemonList(pokemons); // Fix: Update state with complete data
      } catch (error) {
      console.error("Error fetching pokemon:", error);
      setError("Failed to find pokemon.");
    } finally {
      setLoading(false);
    }
  }
  fetchAllPokemon();
  }, []); // Run only once on mount

  return (
      <div className='App'>
        <header className='App-header'>
          <h1>Pokedex</h1>

          {loading && <p>Loading Pokémon...</p>}
          {error && <p>{error}</p>}

          
            {pokemonList.length > 0 ? (
              <div className="pokemonGrid">
            {pokemonList.map((pokemon) => (
                <PokemonCard key={pokemon.id} pokemon={pokemon} />
              ))}
            </div>
            ) : (
              <p>Might Be Loading...</p>
            )}
        </header>
      </div>
  );
}

async function getPokemon(id) {
  let response = await fetch(`${API_URL}/pokemon/${id}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch Pokémon ID: ${id}`);
  }
  let pokemon = await response.json();

  return pokemon;
}
// async function getPokemon(id) {
//   let pokemon = await fetch(`${API_URL}/pokemon/${id}/`);
//   pokemon = await pokemon.json();

//   return pokemon;
// }
export default App;


