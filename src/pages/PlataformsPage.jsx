import axios from 'axios'
import React, { useEffect, useState } from 'react'
import API_URL from '../utils/api'
import KEY_API from '../utils/keyapi'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

function PlataformsPage() {

  const params = useParams()

  const [allGames, setAllGames] = useState(null)

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    try {
      const response = await axios.get(`${API_URL}/games${KEY_API}&platform=${params.platformId}`)
      // console.log(response.data)
      setAllGames(response.data)
    } catch (error) {
      console.log(error)
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