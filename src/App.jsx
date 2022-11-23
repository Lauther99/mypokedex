import { useState } from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import InputName from './components/InputName'
import Pokedex from './components/Pokedex'
import Pokemon from './components/Pokemon'
import ProtectedRoutes from './components/ProtectedRoutes'

function App() {

  return (
    <>
      <HashRouter>
        <Header />
        <Routes>
          <Route path='/' element={<InputName />} />
          <Route element={<ProtectedRoutes />}>
            <Route path='/pokedex' element={<Pokedex />} />
            <Route path='/pokedex/:id' element={<Pokemon />} />
          </Route>
        </Routes>
      </HashRouter>
    </>
  )
}

export default App

