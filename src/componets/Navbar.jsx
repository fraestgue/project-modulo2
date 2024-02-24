import React from 'react'
import logo from "../assets/logo.png"
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <Link to={"/"}>
        <img src={logo} width="120px" alt="logo" />
        </Link>

    </div>
  )
}

export default Navbar