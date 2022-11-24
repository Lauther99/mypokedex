import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import useApi from '../hooks/useApi'
import '../assets/style/pokecard.css'
import '../assets/style/classColors.css'
import useColor from '../hooks/useColor'

function PokedexCard({ urlPokemon }) {
    const [{ pokemonData: pokemon, getPokemonData: getPokemonData }] = useApi()

    useEffect(() => {
        getPokemonData({ url: urlPokemon })
    }, [])

    const [{getClassColor: getClassColor}] = useColor()

    function addZeros(word) {
        const str = word?.split()
        if (word?.length < 4) {
            for (let index = 1; index < (4 - word?.length); index++) {
                str?.unshift(0)
            }
        }
        return str?.join('')
    }

    return (
        <li className='poke-card'>
            <Link to={`/pokedex/${pokemon?.id}`}>
                <img src={pokemon?.sprites?.other['official-artwork']?.front_default} alt="" />
                <p>
                    <span>
                        {`N° ${addZeros(pokemon?.id?.toString())}`}
                    </span>
                    <span>
                        {`${pokemon?.name?.[0].toUpperCase()
                            + pokemon?.name?.toString().substring(1)}`}
                    </span>
                </p>
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
