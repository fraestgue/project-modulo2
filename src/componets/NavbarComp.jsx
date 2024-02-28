import React, { useState } from 'react'
import logo from "../assets/logo.png"
import { Link } from 'react-router-dom'
import Searchbar from "./Searchbar"
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useEffect } from 'react'
import API_URL from '../utils/api'


import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function NavbarComp() {

  const [allPlatforms, setAllPlatforms] = useState(null);
  const [mainGame, setMainGame] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get(
        `${API_URL}/platforms?key=${import.meta.env.VITE_KEY_API}`
      );

      const responseGames = await axios.get(
        `${API_URL}/games?key=${import.meta.env.VITE_KEY_API}`
      );

      setAllPlatforms(response.data.results);
      setMainGame(responseGames.data.results);
    } catch (error) {
      // navigate("/errorpage");
      console.log(error)
    }
  };

  if (allPlatforms === null) {
    return <h3>...Buscando</h3>;
  }

  if (mainGame === null) {
    return <h3>...buscando juegos</h3>;
  }

  const platform = allPlatforms.slice(0, 6)

  const retroPlatformsArr = []
  
  allPlatforms.forEach((eachPlatform) => {
    if (eachPlatform.id === 8 || eachPlatform.id === 9 || eachPlatform.id === 27 || eachPlatform.id === 83 || eachPlatform.id === 24 || eachPlatform.id === 43 || eachPlatform.id === 26 || eachPlatform.id === 107 || eachPlatform.id === 74 || eachPlatform.id === 34) {
      retroPlatformsArr.push(eachPlatform)
    }
  })

 

  


  return (

    <div className='navbar'>

        <Link to={"/"} className='navbar'>
        <img src={logo} width="120px" alt="logo" />
        
        </Link>
        <Searchbar />
        
        <Navbar variant="dark" bg="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#home">GAMEHYPE</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-dark-example" />
        <Navbar.Collapse id="navbar-dark-example">
          <Nav>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="Plataformas"
              menuVariant="dark"
            >
              {platform.map((eachPlatform) => {
                return (<Link to={`/platforms/${eachPlatform.id}`} key={eachPlatform.id}>
                  <NavDropdown.Item href="#action/3.1" >
                  
                  {eachPlatform.name}
                  </NavDropdown.Item>
                  </Link>
                  
                )
              })}
            </NavDropdown>

            <NavDropdown
              id="nav-dropdown-dark-example"
              title="Retro"
              menuVariant="dark"
            >
              {retroPlatformsArr.map((eachPlatform) => {
                return (<Link to={`/platforms/${eachPlatform.id}`} key={eachPlatform.id}>
                  <NavDropdown.Item href="#action/3.1" >
                  
                  {eachPlatform.name}
                  </NavDropdown.Item>
                  </Link>
                  
                )
              })}
            </NavDropdown>

            <NavDropdown
              id="nav-dropdown-dark-example"
              title="Venta de juegos"
              menuVariant="dark"
            >
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        
    </div>
  )
}

export default NavbarComp