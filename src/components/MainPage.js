import React, { useEffect, useState } from 'react'
import PokemonThumb from './PokemonThumb'
import MainHeader from './MainHeader'
import {Link} from 'react-router-dom';

function MainPage() {

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

  const [searchTerm, setSearchTerm] = useState('');

  const passData = (data) => {
    setSearchTerm(data);
  };

  return (
    <>
      <div className="app-container">
      <MainHeader passData={passData}/>
 
      <div className="pokemon-container" >
        <div className="all-container">
       
        {allPokemons.filter( (val) => {
          if(searchTerm=== ""){
            return val;
          }
          else if(val.name.includes(searchTerm)){
            return val;
          }
        }
        ).map((pokemonStats, index) =>
        <Link to={`/DetailsPage/${pokemonStats.id}`} style={{textDecoration: 'none'}}>
          <PokemonThumb
            key={index}
            id={pokemonStats.id}
            image={pokemonStats.sprites.other.dream_world.front_default}
            name={pokemonStats.name}
          />
          </Link>
          )}
          </div>
      </div>
   
    </div>
  
    </>
  );
};

export default MainPage;