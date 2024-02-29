import {CSSProperties} from 'react'
import Pacman from '../componets/Pacman'

function ErrorPage() {
  return (
    <div>
    <Pacman />
    <div className="nes-container is-rounded is-dark">ERROR AL CONECTAR CON EL SERVIDOR. VUELVE A INTENTARLO EN UNOS MINUTOS</div>
    </div>
  )
}

export default ErrorPage