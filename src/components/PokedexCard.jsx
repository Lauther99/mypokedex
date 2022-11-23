import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import useApi from '../hooks/useApi'
import '../assets/style/pokecard.css'
import useColor from '../hooks/useColor'

function PokedexCard({ urlPokemon }) {
    const [{ pokemonData: pokemon, getPokemonData: getPokemonData }] = useApi()

    useEffect(() => {
        getPokemonData({ url: urlPokemon })
    }, [])

    function getClassColor(type) {
        switch (type) {
            case 'normal':
                return 'normal'
                break;
            case 'fighting':
                return 'fighting'
                break;
            case 'flying':
                return 'flying'
                break;
            case 'poison':
                return 'poison'
                break;
            case 'ground':
                return 'ground'
                break;
            case 'rock':
                return 'rock'
                break;
            case 'bug':
                return 'bug'
                break;
            case 'ghost':
                return 'ghost'
                break;
            case 'steel':
                return 'steel'
                break;
            case 'fire':
                return 'fire'
                break;
            case 'water':
                return 'water'
                break;
            case 'grass':
                return 'grass'
                break;
            case 'electric':
                return 'electric'
                break;
            case 'psychic':
                return 'psychic'
                break;
            case 'ice':
                return 'ice'
                break;
            case 'dark':
                return 'dark'
                break;
            case 'fairy':
                return 'fairy'
                break;
            case 'shadow':
                return 'shadow'
                break;
            default:
                return 'unknown'
                break;
        }
    }

    return (
        <li className='poke-card'>
            <Link to={`/pokedex/${pokemon?.id}`}>
                <img src={pokemon?.sprites?.front_default} alt="" />
                {pokemon?.name?.[0].toUpperCase() + pokemon?.name?.toString().substring(1)}
                <div className='poke-type'>
                    {
                        pokemon?.types?.map(type => (
                            <h6 className={`${getClassColor(type.type.name)}`}
                                key={Math.random()}>
                                {type.type.name.toUpperCase()}
                            </h6>
                        ))
                    }
                </div>
            </Link>
        </li>

    )
}

export default PokedexCard
