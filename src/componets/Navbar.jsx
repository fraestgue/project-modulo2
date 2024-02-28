import React, { useState } from 'react'
import logo from "../assets/logo.png"
import { Link } from 'react-router-dom'
import Searchbar from "./Searchbar"

function Navbar() {

  


  return (
    <div className='navbar'>
        <Link to={"/"} className='navbar'>
        <img src={logo} width="120px" alt="logo" />
        <h1>GAMEHYPE</h1>
        </Link>
        <Searchbar />
        
    </div>
  )
}

export default Navbar