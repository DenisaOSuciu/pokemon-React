import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MainHeader from './MainHeader'
import PokemonDetails from './PokemonDetails';


const DetailsPage = () => {
  const {pokemonID} =useParams();
  const [pokemon, setPokemon] = useState([]);
 
  async function getAllPokemons() {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonID}`)
    const data = await res.json();

  setPokemon(currentList => [...currentList, data])


  }

  useEffect(() => {
    getAllPokemons()
  }, []);

  return (
    <>
      <div className="app-container">
      <MainHeader/>
 
      <div className="pokemon-container" >
        <div className="all-container">
       
        {pokemon.map((pokemonStats, index) =>
          <PokemonDetails
            key={index}
            id={pokemonStats.id}
            image_front={pokemonStats.sprites.front_default}
            image_back={pokemonStats.sprites.back_default}
            name={pokemonStats.name}
            types={pokemonStats.types[0].type.name}
            ability={pokemonStats.abilities[0].ability.name}
            height={pokemonStats.height}
            weight={pokemonStats.weight}
          />
        
          )}
          </div>
      </div>
   
    </div>
  
    </>
  );
 
};


export default DetailsPage;


/*  
 const {pokemonID} =useParams();
  const [allPokemons, setAllPokemons] = useState([]);
 
  async function getAllPokemons() {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon')
    const data = await response.json();

    function createPokemonObject(results) {
      results.forEach(async pokemon => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
        const data = await res.json()
        setAllPokemons(currentList => [...currentList, data])
      })
    }
    createPokemonObject(data.results);
  }

  useEffect(() => {
    getAllPokemons()
  }, []);


  return (
    <>
      <div className="app-container">
      <MainHeader/>
 
      <div className="pokemon-container" >
        <div className="all-container">
       
        {allPokemons.filter( (val) => {
          if(val.id == pokemonID){
            return val;
          }
        }
        ).map((pokemonStats, index) =>
          <PokemonDetails
            key={index}
            id={pokemonStats.id}
            image_front={pokemonStats.sprites.front_default}
            image_back={pokemonStats.sprites.back_default}
            name={pokemonStats.name}
            types={pokemonStats.types[0].type.name}
            ability={pokemonStats.abilities[0].ability.name}
            height={pokemonStats.height}
            weight={pokemonStats.weight}
          />
        
          )}
          </div>
      </div>
   
    </div>
  
    </>
  );

*/