import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPokemon = createAsyncThunk('pokemon/fetchPokemon', async () => {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=50');
    const pokemonData = await Promise.all(
        response.data.results.map(async (pokemon) => {
            const details = await axios.get(pokemon.url);
            return details.data;
        })
    );
    return pokemonData;
});

const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState: {
        items: [],
        filteredItems: [],
        status: 'idle',
    },
    reducers: {
        filterPokemon: (state, action) => {
            const { type, value } = action.payload;
            state.filteredItems = state.items.filter((pokemon) =>
                pokemon[type]?.some((t) => t.type.name === value)
            );
        },
        resetFilter: (state) => {
            state.filteredItems = state.items;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPokemon.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchPokemon.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.items = action.payload;
                state.filteredItems = action.payload;
            })
            .addCase(fetchPokemon.rejected, (state) => {
                state.status = 'failed';
            });
    },
});

export const { filterPokemon, resetFilter } = pokemonSlice.actions;

export default pokemonSlice.reducer;
