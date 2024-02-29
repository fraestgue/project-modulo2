import axios from 'axios'
import React, { useEffect, useState } from 'react'
import API_URL from '../utils/api'
import { useNavigate, useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

function PlataformsPage() {

  const params = useParams()
  const navigate = useNavigate()

  const [allGames, setAllGames] = useState(null)

  useEffect(() => {
    getData()
  }, [params.platformId])

  const getData = async () => {
    try {
      
      const response = await axios.get(`${API_URL}/games?key=${import.meta.env.VITE_KEY_API}&platforms=${params.platformId}`)
      
      setAllGames(response.data)
    } catch (error) {
      
      navigate("/errorpage")
    }
  }

  if(allGames === null) {
    return <h3>...Buscando juegos</h3>
  }

  const games = allGames.results

  const volverAtras = () => {
    navigate(-1)
  }
 


  return (
    <div>
      <button onClick={volverAtras} type="button"
        className="nes-btn is-warning">
        🔙
      </button>
      {games.map((eachGame) => {
        return <div key={eachGame.id}>
          <Link to={`/games/${eachGame.id}`} className="platforms">
          <img src={eachGame.background_image
} alt="game" width={"200px"} height={"120px"}/>
          <h3>{eachGame.name}</h3>
          </Link>
          <hr />
        </div>
      })}
    </div>
  )
}

export default PlataformsPage