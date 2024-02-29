import axios from "axios";
import React, { useEffect, useState,CSSProperties } from "react";
import API_URL from "../utils/api";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { PacmanLoader } from "react-spinners";


function RetroPlatforms() {
  const params = useParams();
  const navigate = useNavigate();

  const [allRetroGames, setAllRetroGames] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get(
        `${API_URL}/games?key=${import.meta.env.VITE_KEY_API}&platforms=${
          params.platformId
        }`
      );
       
      setAllRetroGames(response.data.results);
    } catch (error) {
      navigate("/errorpage");
    }
  };

  if (allRetroGames === null) {
    return <PacmanLoader color="#f44855" />;
  }

  const volverAtras = () => {
    navigate(-1);
  };
 

  return (
    <div>
      <button
        onClick={volverAtras}
        type="button"
        className="nes-btn is-warning"
      >
        🔙
      </button>
      <hr />
      <div>

      </div>
      <hr />
      {allRetroGames.map((eachGame) => {
        return (
          <div key={eachGame.id}>
            <Link to={`/games/${eachGame.id}`} className="platforms">
              <img src={eachGame.background_image} alt="game" width={"200px"} height={"120px"} />
              <h3>{eachGame.name}</h3>
            </Link>
            <hr />
          </div>
        );
      })}
    </div>
  );
}

export default RetroPlatforms;
