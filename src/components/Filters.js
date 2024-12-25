import React from 'react';
import { useDispatch } from 'react-redux';
import { filterPokemon, resetFilter } from '../slices/pokemonSlice';

const Filters = () => {
    const dispatch = useDispatch();

    const handleFilter = (type) => {
        dispatch(filterPokemon({ type: 'types', value: type }));
    };

    return (
        <div className="filters">
            <button onClick={() => dispatch(resetFilter())}>All</button>
            <button onClick={() => handleFilter('fire')}>Fire</button>
            <button onClick={() => handleFilter('water')}>Water</button>
            <button onClick={() => handleFilter('grass')}>Grass</button>
        </div>
    );
};

export default Filters;
