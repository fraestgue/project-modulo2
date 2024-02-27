import React from 'react'

function Error404NotFundPage() {

  const volverAtras = () => {
    navigate("/")
  }
  return (
    <div>
      <h1>VAYA! PARECE QUE TE HAS PERDIDO. VUELVE AL INICIO</h1>
      <button onClick={volverAtras}>
        vuelve al inicio
      </button>

    </div>

  )
}

export default Error404NotFundPage