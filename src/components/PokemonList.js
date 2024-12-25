import React from 'react';
import './PokemonList.css';

const PokemonList = ({ pokemon }) => {
    return (
        <div className="pokemon-list">
            {pokemon.map((p) => (
                <div key={p.id} className="pokemon-card">
                    <img src={p.sprites.front_default} alt={p.name} />
                    <h3>{p.name}</h3>
                    <p>Type: {p.types.map((t) => t.type.name).join(', ')}</p>
                </div>
            ))}
        </div>
    );
};

export default PokemonList;
