import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useApi from '../hooks/useApi'
import Pagination from './Pagination'
import PokedexCard from './PokedexCard'
import Footer from './Footer'
import '../assets/style/pokedex.css'

function Pokedex() {
    const [{ urls: allPokeUrls, pokeTypes: allPokeTypes, getOneType: getOnePokeType, someError: someError }] = useApi()
    //variables para paginar
    const [currentPage, setCurrentPage] = useState(1);
    const [pokemonsPerPage, setpokemonsPerPage] = useState(10);
    const lastPokemonIndex = currentPage * pokemonsPerPage;
    const firstPokemonIndex = lastPokemonIndex - pokemonsPerPage;
    const currentPokemons = allPokeUrls.slice(firstPokemonIndex, lastPokemonIndex);
    // variables para buscar
    const [inputPokemon, setInputPokemon] = useState('');
    //variables para navegar en la aplicacion
    const navigate = useNavigate()

    function filterType(e) {
        getOnePokeType(e.target.value)
        setCurrentPage(1)
    };

    function getOptions() {
        return (
            allPokeTypes.map(pokeType => (
                <option
                    key={pokeType.url}
                    value={pokeType?.url}>
                    {pokeType?.name[0].toUpperCase() + pokeType?.name.substring(1)}
                </option>
            ))
        )
    }

    function getPorkedexCards() {
        return (
            currentPokemons.map(pokeUrl => (
                <PokedexCard
                    key={pokeUrl.url ? pokeUrl.url : pokeUrl.pokemon.url}
                    urlPokemon={pokeUrl.url ? pokeUrl.url : pokeUrl.pokemon.url} />
            ))
        )
    }

    function searchPokemon() {
        navigate(`/pokedex/${inputPokemon.toLocaleLowerCase().trim()}`)
    }

    return (
        <section className='pokedex'>
            <article className='poke-search-container'>
                <h2>Search for a pokemon</h2>
                <div className='poke-search'>
                    <input type="text"
                        onChange={(e) => setInputPokemon(e.target.value)}
                        value={inputPokemon} />
                    <button onClick={() => searchPokemon()}>
                        <i className="fa-solid fa-magnifying-glass fa-beat"></i>
                    </button>
                </div>
                <div className='poke-filter'>
                    <h2>Filter your pokemons</h2>
                    <select onChange={(e) => filterType(e)}>
                        <option value="all">All Pokemons</option>
                        {getOptions()}
                    </select>
                </div>
            </article>
                <Pagination
                    totalPokemons={allPokeUrls.length}
                    pokemonsPerPage={pokemonsPerPage}
                    setCurrentPage={setCurrentPage}
                />
            <ul className='poke-cards-container'>
                {getPorkedexCards()}
            </ul>
            <Footer />
        </section>
    )
}

export default Pokedex
