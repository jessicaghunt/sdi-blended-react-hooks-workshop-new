import React, { useState } from 'react';
import PokemonInfo from "./PokemonInfo";

function PokemonCard({ pokemon }) {
  const [showInfo, setShowInfo] = useState(false); // State to control popup visibility

  const togglePokemonInfo = () => {
    setShowInfo(!showInfo); // Toggle the popup visibility
  };

  const closePopup = () => {
    setShowInfo(false); // Close the popup
  };

  return (
    <div>
      <div className="PokemonCard" onClick={togglePokemonInfo}>
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        <p>{pokemon.name} #{pokemon.id}</p>
      </div>

      {/* Popup/Modal for Pokémon info */}
      {showInfo && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closePopup}>Close</button>
            <PokemonInfo pokemon={pokemon} />
          </div>
        </div>
      )}
    </div>
  );
}

export default PokemonCard;



// import React, { useState } from 'react';
// import PokemonInfo from "./PokemonInfo";

// function PokemonCard({pokemon}){

//     const createPokemonInfo = () => {
//         return(
//             <PokemonInfo pokemon = {pokemon}/>
//         )
//     }
//     return(
//         <div className="PokemonCard" onClick={createPokemonInfo}>
//         <img src={pokemon.sprites.front_default} />
//         <p> {pokemon.name} {pokemon.id}</p>
//         {/* addEventListener(type, onClick) */}
//         </div>
//     )
// }

// export default PokemonCard;


