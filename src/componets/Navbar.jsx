import React from 'react'
import logo from "../assets/logo.png"
import { Link } from 'react-router-dom'
import Searchbar from "./Searchbar"

function Navbar() {
  return (
    <div>
        <Link to={"/"}>
        <img src={logo} width="120px" alt="logo" />
        <h1>GAMEHYPE</h1>
        </Link>
        <Searchbar />

    </div>
  )
}

export default Navbar