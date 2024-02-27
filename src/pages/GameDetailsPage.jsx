import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import API_URL from "../utils/api";

import axios from "axios";

function GameDetailsPage() {
  const params = useParams();
  const navigate = useNavigate();

  const [game, setGame] = useState(null);

  useEffect(() => {
    getGames();
  }, [params.gameId]);

  const getGames = async () => {
    try {
      const response = await axios.get(
        `${API_URL}/games/${params.gameId}?key=${import.meta.env.VITE_KEY_API}`
      );
      setGame(response.data);
    } catch (error) {
      navigate("/errorpage");
    }
  };

  if (game === null) {
    return <h3>...buscando juego</h3>;
  }

  // podemos hacer funcion fuera y pasarla o hacer la funcion anonima

  const volverAtras = () => {
    navigate(-1);
  };

  return (
    <div>
      <button
        type="button"
        className="nes-btn is-warning"
        onClick={volverAtras}
      >
        🔙
      </button>
          <h2>{game.name}</h2>
          <img src={game.background_image} alt="juego" width={"200px"} />
          <hr />
          <div className="nes-container is-dark with-title">
            <p className="title">{game.name}</p>
            <p>{game.description_raw}</p>
          </div>
          <hr />

      <div className="lists">
        <ul className="nes-list is-circle">
          
            Principales plataformas:
            {game.parent_platforms.map((eachPlatform) => {
              return (
                <li key={eachPlatform.platform.id}>
                  {eachPlatform.platform.name}
                </li>
              );
            })}
          

          <p>Rating sobre 5: {game.rating}</p>
        </ul>
      </div>
    </div>
  );
}

export default GameDetailsPage;
