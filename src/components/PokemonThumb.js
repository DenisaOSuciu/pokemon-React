import React from 'react';


const PokemonThumb = ({id, image, name, type}) => {
    return (
   
        <div className=" thumb-container">
            <h2 >{name.toUpperCase()}</h2>
            <img src={image} alt={name} />
        </div>

    )
}

export default PokemonThumb