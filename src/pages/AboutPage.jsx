import React from 'react'
import { useNavigate } from 'react-router-dom'

function AboutPage() {

  const navigate = useNavigate()

  const volverAtras = () => {
    navigate(-1)
  }

  return (
    <div>

      <button onClick={volverAtras}>
      🔙
      </button>
      <div>AboutPage</div>
    </div>
  )
}

export default AboutPage