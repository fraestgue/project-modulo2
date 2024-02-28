import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import API_URL from "../utils/api";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";


function RetroPage() {
  const [allRetroPlatforms, setAllRetroPlatforms] = useState(null);
  const [mainRetroGame, setMainRetroGame] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    getRetroPlat()
  }, []);

  const getRetroPlat = async () => {
    try {
      const response = await axios.get(
        `${API_URL}/platforms?key=${import.meta.env.VITE_KEY_API}`
      );
      const responseRetroGames = await axios.get(
        `${API_URL}/games?key=${import.meta.env.VITE_KEY_API}`
      );
        
      setAllRetroPlatforms(response.data.results);
      setMainRetroGame(responseRetroGames.data.results)
    } catch (error) {
        console.log(error)
    //   navigate("/errorpage");
    }
  };

  if (allRetroPlatforms === null) {
    return <h3>...buscando plataformas</h3>;
  }
  if (mainRetroGame === null) {
    return <h3>...buscando juegos</h3>;
  }

  const volverAtras = () => {
    navigate(-1);
  };

  const retroPlatformsArr = [allRetroPlatforms[8],allRetroPlatforms[9],allRetroPlatforms[17],allRetroPlatforms[23],allRetroPlatforms[24],allRetroPlatforms[25],allRetroPlatforms[26],allRetroPlatforms[37],allRetroPlatforms[41],allRetroPlatforms[44]]
  console.log(retroPlatformsArr)
 

  console.log(allRetroPlatforms)
  

  return (
    <div>
      <button
        type="button"
        className="nes-btn is-warning"
        onClick={volverAtras}
      >
        🔙
      </button>
      <div>
      {/* <Carousel>
        {gameRetroArr.map((eachGame) => {
          return (
            <Carousel.Item interval={2000} key={eachGame.id}>
              <Link to={`/games/${eachGame.id}`}>
              <img src={eachGame.background_image} alt="game" width={"400px"} height={"250px"} />
              </Link>
              <Carousel.Caption>
                <p style={{textShadow:"1px 1px 5px black"}}>{eachGame.name}</p>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel> */}
      </div>
      
      <div>
        {retroPlatformsArr.map((eachPlatform) => {
          return (
            <Link to={`/retro/${eachPlatform.id}`} key={eachPlatform.id}>
            <h2>{eachPlatform.name}</h2>
            <hr />
            </Link>
          )
        })}
      </div>

     
    </div>
  );
}

export default RetroPage;
