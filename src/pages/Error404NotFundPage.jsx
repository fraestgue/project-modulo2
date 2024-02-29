import React from 'react'
import Pacman from '../componets/Pacman'

function Error404NotFundPage() {

  const volverAtras = () => {
    navigate("/")
  }
  return (
    <div>
      <Pacman />
      <h1 className="nes-container is-rounded is-dark">VAYA! PARECE QUE TE HAS PERDIDO. VUELVE AL INICIO</h1>
      <button onClick={volverAtras} type="button" className="nes-btn is-warning">
        vuelve al inicio
      </button>

    </div>

  )
}

export default Error404NotFundPage