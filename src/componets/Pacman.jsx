import React, {CSSProperties} from 'react'
import { PacmanLoader } from "react-spinners";

function Pacman() {
  return (
    <div className='pacman'>
        <PacmanLoader color="#f44855" />
    </div>
  )
}

export default Pacman