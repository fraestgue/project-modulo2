import React from 'react'

function AboutPage() {

  const volverAtras = () => {
    navigate(-1)
  }

  return (
    <div>

      <button onClick={volverAtras}>
        atrás
      </button>
      <div>AboutPage</div>
    </div>
  )
}

export default AboutPage