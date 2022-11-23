import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import '../assets/style/inputName.css'
import '../assets/style/pokeball.css'
import { changeName } from '../store/slices/userName.slice';

function InputName() {
    const [inputName, setInputName] = useState('');
    const videoUrl = 'https://assets.pokemon.com//assets/cms2/img/misc/virtual-backgrounds/sword-shield/pokemon-in-the-wild.mp4'
    const poster = 'https://images.alphacoders.com/124/1246940.jpg'
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const goPokedex = () => {
        if (inputName && inputName?.trim().length !== 0) {  // para validar espacios en blanco
            dispatch(changeName(inputName))
            navigate('/pokedex')
        } else {
            alert('ingrese un nombre valido')
        }
    }

    return (
        <>
            <section className='trainer-container'>
                <video src={videoUrl} autoPlay muted loop poster={poster} type="video/mp4">
                </video>
                <article className='input-container'>
                    <article className='words-container'>
                        <div className='words'>
                            <span>READY</span>
                        </div>
                        <div className='words'>
                            <span>FOR THE</span>
                        </div>
                        <div className='words'>
                            <span>JOURNEY?</span>
                        </div>
                    </article>
                    <article className='input-name-container'>
                        <input type="text" onChange={(e) => { setInputName(e.target.value) }} placeholder='Write your name' />
                        <div className="pokeball" onClick={goPokedex}>
                            <button>GO</button>
                        </div>
                    </article>
                </article>
            </section>
        </>
    )
}

export default InputName