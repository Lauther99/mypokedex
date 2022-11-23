import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import '../assets/style/header.css'
import { changeName } from '../store/slices/userName.slice';

const Header = () => {
    const userName = useSelector(state => state.userName);
    const dispatch = useDispatch()
    let time = 120;

    function transformString(str) {
        let strArray = str.split('')
        return strArray.map(letter => {
            time += 120
            return (
                <span key={time}
                    style={{ animationDelay: `${time}ms` }}>
                    {letter}
                </span>
            )
        })
    }

    function logout() {
        dispatch(changeName(''))
    };

    function setHeader() {
        if (userName?.trim().length !== 0) {  // para validar espacios en blanco
            return (
                <article className='with-name' >
                    <div className='div-header'>
                        <NavLink to='/'>
                            <img src="https://seeklogo.com/images/P/Pokemon-logo-497D61B223-seeklogo.com.png" alt="" />
                        </NavLink>
                        <div className='welcome'>
                            <p>{transformString(`Welcome! ${userName}`)}</p>
                        </div>
                        <h5 onClick={() => {logout()}}>Logout</h5>
                    </div>
                </article>
            )
        } else {
            return (
                <div className='div-header no-name' >
                    <NavLink to='/'>
                        <img src="https://seeklogo.com/images/P/Pokemon-logo-497D61B223-seeklogo.com.png" alt="" />
                    </NavLink>
                    <div className='welcome'>
                        <p>{transformString('Welcome to your Pokedex!')}</p>
                    </div>

                </div>)
        }
    }



    return (
        <>
            <div className='header-container'>
                {setHeader()}
            </div>

        </>
    );
};

export default Header;