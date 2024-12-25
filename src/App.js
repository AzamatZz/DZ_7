import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPokemon } from './slices/pokemonSlice';
import PokemonList from './components/PokemonList';
import Filters from './components/Filters';
import './App.css';

function App() {
    const dispatch = useDispatch();
    const { filteredItems, status } = useSelector((state) => state.pokemon);

    useEffect(() => {
        dispatch(fetchPokemon());
    }, [dispatch]);

    if (status === 'loading') return <p>Loading...</p>;
    if (status === 'failed') return <p>Failed to load data.</p>;

    return (
        <div className="app">
            <h1>Pokémon Cards</h1>
            <Filters />
            <PokemonList pokemon={filteredItems} />
        </div>
    );
}

export default App;

