import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Footer from './Footer'
import useApi from '../hooks/useApi';
import useColor from '../hooks/useColor'
import '../assets/style/classColors.css'
import '../assets/style/pokemon.css'


function Pokemon() {
    const navigate = useNavigate()
    const { id } = useParams()
    const [{
        singularPokemon: pokemon,
        getPokemonData: getPokemonData,
        someError: someError
    }] = useApi();
    const [{ getClassColor: getClassColor }] = useColor()

    useEffect(() => {
        getPokemonData({ id: id })
    }, [])

    const goBack = () => {
        navigate(`/pokedex/`)
    }

    const nextPokemon = () => {
        const prevId = parseInt(id) + 1
        prevId > 10249? navigate(`/pokedex/`) : navigate(`/pokedex/${prevId}`)
    }

    const prevPokemon = () => {
        const prevId = parseInt(id) - 1
        prevId < 0 ? navigate(`/pokedex/`) : navigate(`/pokedex/${prevId}`)
    }

    //console.log(pokemon);
    return (
        <section>
            {
                someError ? <h1>Something bad happened</h1> : (
                    <article className='pokemon-container'>
                        <div className='justadiv'></div>
                        <img src={pokemon?.sprites?.front_default} alt="" />
                        <div className='poke-description'>
                            <div className='arrow-icon back-icon' onClick={goBack}>
                                <i className="fa-solid fa-left-long fa-2xl"></i>
                                <p>Go back</p>
                            </div>
                            <h1>
                                {`${pokemon?.name?.[0].toUpperCase()
                                    + pokemon?.name?.toString().substring(1)}`}
                            </h1>
                            <div className='types'>
                                {
                                    pokemon?.types?.map(type => (
                                        <h6 className={`${getClassColor(type.type.name)}`}
                                            key={Math.random()}>
                                            {type.type.name.toUpperCase()}
                                        </h6>
                                    ))
                                }
                            </div>
                        </div>
                        <div className='arrow-icon next-pokemon' onClick={nextPokemon}>
                            <p>Next</p>
                            <i className="fa-solid fa-right-long fa-2xl"></i>
                        </div>
                        <div className='arrow-icon previous-pokemon' onClick={prevPokemon}>
                            <i className="fa-solid fa-left-long fa-2xl"></i>
                            <p>Previous</p>
                        </div>
                    </article>
                )
            }
            <Footer />
        </section>
    )
}

export default Pokemon
