import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useApi from '../hooks/useApi';

function Pokemon() {
    const { id } = useParams()
    const [{
        singularPokemon: pokemon,
        getPokemonData: getPokemonData,
        someError: someError
    }] = useApi();

    useEffect(() => {
        getPokemonData({ id: id })
    }, [])

    return (
        <div>
            {
                someError ? <h1>Something bad happened</h1> : (
                    <div>
                        <h1>{pokemon?.name}</h1>
                        <img src={pokemon?.sprites?.front_default} alt="" />
                    </div>
                )
            }

        </div>
    )
}

export default Pokemon
