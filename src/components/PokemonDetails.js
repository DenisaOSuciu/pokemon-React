import React from 'react';


import './PokemonDetails.css'

const PokemonDetails = ({ id, image_front, image_back, name, types, ability , height, weight}) => {

    const style = types + " type-container";
    return (
        <>
            <div className=" details-container">
                <div class="row">
                    <div class="column">
                        <h1>{name.toUpperCase()}</h1>
                    </div>
                    <div class="column">
                        <div className={style} align="right"> <h3>{types.toUpperCase()}</h3></div>

                    </div>

                </div>
                <div class="row">
                    <div class="column">
                        <img src={image_front} alt={name}></img>
                    </div>
                    <div class="column">
                        <img align="right" src={image_back} alt={name} />
                    </div>
                </div>
                <div className={style}>
                    <h2 >ABILITY</h2>
                    <h3>{ability.toUpperCase()}</h3>

                </div>
                <br />
                <br />
                <div className={style}>
                    <h2 >MEASUREMENTS</h2>
                    <h3>Height {height}</h3>
                    <h3>Weight {weight}</h3>
                    

                </div>


            </div>

        </>
    )
}

export default PokemonDetails