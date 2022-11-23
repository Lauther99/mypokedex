import axios from "axios";
import { useEffect, useState } from "react";

const useApi = () => {
    const [urls, setUrls] = useState([]);
    const [pokemonData, setPokemonData] = useState([]);
    const [singularPokemon, setSingularPokemon] = useState([]);
    const [pokeTypes, setPokeTypes] = useState([]);
    const [someError, setSomeError] = useState(false);


    useEffect(() => {
        getAllUrls();
        getAllTypes();
    }, [])

    const getAllUrls = () => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=5000&offset=0')
            .then(res => setUrls(res.data.results))
            .catch(error => error ? setSomeError(true) : setSomeError(false))
    }

    const getPokemonData = ({ url: url, id: id }) => {
        if (url && !id) {
            axios.get(url)
                .then(res => setPokemonData(res.data))
                .catch(error => error ? setSomeError(true) : setSomeError(false))

        } else if (id && !url) {
            axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
                .then(res => setSingularPokemon(res.data))
                .catch(error => error ? setSomeError(true) : setSomeError(false))
        }
    }

    const getAllTypes = () => {
        axios.get('https://pokeapi.co/api/v2/type/')
            .then(res => setPokeTypes(res.data.results))
            .catch(error => error ? setSomeError(true) : setSomeError(false))
    }

    const getOneType = (url) => {
        if (url === 'all') {
            getAllUrls()
        } else {
            axios.get(url)
                .then(res => setUrls(res.data.pokemon))
                .catch(error => error ? setSomeError(true) : setSomeError(false))
        }
    }

    return [{
        urls: urls, //urls de todos los pokemones
        getAllUrls: getAllUrls, //funcion 
        pokemonData: pokemonData, // datos de cada pokemon
        getPokemonData: getPokemonData, //funcion 
        singularPokemon: singularPokemon,
        pokeTypes: pokeTypes,
        getOneType: getOneType,
        someError: someError
    }]
}

export default useApi