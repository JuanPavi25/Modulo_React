import './App.css'
import { TarjetaPerfil } from './components/TarjetaPerfil'

function App() {
  return (
    <>
      <div className='app2'>
        <TarjetaPerfil nickname="Alexander" nombre="Juan Pavi" edad={"24 años"} profesion={"Ing. Sistemas"} />
        <TarjetaPerfil nickname="Liam" nombre="Carlos Perez" edad={"31 Años"} profesion={"Ing. Sistemas"} />
        <TarjetaPerfil nickname="Ryam" nombre="Claudia Arana" edad={"25 años"} profesion={"Ing. Software"} />
      </div>
    </>

  )
}

export default App
