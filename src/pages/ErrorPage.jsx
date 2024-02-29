import {CSSProperties} from 'react'
import { PacmanLoader } from 'react-spinners'

function ErrorPage() {
  return (
    <div>
    <PacmanLoader color="#f44855" />
    <div>ERROR AL CONECTAR CON EL SERVIDOR. VUELVE A INTENTARLO EN UNOS MINUTOS</div>
    </div>
  )
}

export default ErrorPage