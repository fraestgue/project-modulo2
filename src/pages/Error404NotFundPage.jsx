import React from 'react'
import Pacman from '../componets/Pacman'
import { useNavigate } from 'react-router-dom'

function Error404NotFundPage() {

  const navigate = useNavigate()

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