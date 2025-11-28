import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TarjetaPerfil } from './components/TarjetaPerfil'

function App() {
  return (
    <>
      <div className='app2'>
        <TarjetaPerfil nombre="Juan Pavi" edad={25} profesion={"Ing."} />
        <TarjetaPerfil nombre="Juan Pavi" edad={25} profesion={"Ing."} />
        <TarjetaPerfil nombre="Juan Pavi" edad={25} profesion={"Ing."} />
      </div>
    </>

  )
}

export default App
