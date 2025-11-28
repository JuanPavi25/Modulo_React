import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {<section className='d-flex flex-column justify-content-center'>
        <h1 className='text-light'>Challenge 1: Contador Interactivo</h1>

        <div className="card rounded-3 shadow-lg p-1">
          <div className='card-body'>
            <strong>{count}</strong>
          </div>

        </div>
        <div>
          <button onClick={() => setCount((count) => count + 1)}>
            Aumentar Contador
          </button>
          <button onClick={() => setCount((count) => count - 1)}>
            Disminuir Contador
          </button>
          <button onClick={() => setCount((count) => count = 0)}>
            Resetear Contador
          </button>
        </div>

      </section>
      }
    </>
  )
}

export default App
