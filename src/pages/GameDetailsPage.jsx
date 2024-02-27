import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import API_URL from "../utils/api";

import axios from "axios";

function GameDetailsPage() {
  const params = useParams();
  const navigate = useNavigate()

  const [game, setGame] = useState(null);

  useEffect(() => {
    getGames();
  }, []);

  const getGames = async () => {
    try {
      const response = await axios.get(
        `${API_URL}/games/${params.gameId}?key=${import.meta.env.VITE_KEY_API}`
      );
      setGame(response.data);
    } catch (error) {
     
      navigate("/errorpage")
    }
  };

  if (game === null) {
    return <h3>...buscando juego</h3>;
  }

  // const gameDetails = game.results

  return (
    <div>
      <h2>{game.name}</h2>
      <img src={game.background_image} alt="juego" width={"200px"} />
      <hr />
      <article>{game.description_raw}</article>
      <hr />

        <div>
        Principales plataformas: 
        {game.parent_platforms.map((eachPlatform) => {
          return <p key={eachPlatform.platform.id}>{eachPlatform.platform.name}</p>;
        })}
        </div>
      
      <p>Rating sobre 5: {game.rating}</p>
    </div>
  );
}

export default GameDetailsPage;
