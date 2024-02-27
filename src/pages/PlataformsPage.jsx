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
  }, [])

  const getData = async () => {
    try {
      console.log(params.platformId)
      const response = await axios.get(`${API_URL}/games?key=${import.meta.env.VITE_KEY_API}&platforms=${params.platformId}`)
      // console.log(response.data)
      setAllGames(response.data)
    } catch (error) {
      // console.log(error)
      navigate("/errorpage")
    }
  }

  if(allGames === null) {
    return <h3>...Buscando juegos</h3>
  }

  const games = allGames.results
  // console.log(games)


  return (
    <div>
      {games.map((eachGame) => {
        return <div key={eachGame.id}>
          <Link to={`/games/${eachGame.id}`}>
          <img src={eachGame.background_image
} alt="game" width={"160px"} />
          <h3>{eachGame.name}</h3>
          </Link>
          <hr />
        </div>
      })}
    </div>
  )
}

export default PlataformsPage