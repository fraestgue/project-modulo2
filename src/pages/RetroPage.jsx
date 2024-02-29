import React, { useEffect, useState,CSSProperties } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import API_URL from "../utils/api";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import { PacmanLoader } from "react-spinners";


function RetroPage() {
  const [allRetroPlatforms, setAllRetroPlatforms] = useState(null);
  const [mainRetroGame, setMainRetroGame] = useState(null);
  // const [randomPlatformId, setRandomPlaformId] = useState(null)

  const navigate = useNavigate();

  // let randomPlatformId;

  const idRetro = [8, 9, 27, 83, 24, 43, 26, 107, 74, 34]

  const indiceRandom = Math.floor(Math.random() * idRetro.length)

  const plataformaAleatoria = idRetro[indiceRandom]

  useEffect(() => {
    getRetroPlat()
  }, []);

  const getRetroPlat = async () => {
    try {
      const response = await axios.get(
        `${API_URL}/platforms?key=${import.meta.env.VITE_KEY_API}`
      );
      const responseRetroGames = await axios.get(
        `${API_URL}/games?key=${import.meta.env.VITE_KEY_API}&platforms=${
          plataformaAleatoria
        }`
      );
        
      setAllRetroPlatforms(response.data.results);
      setMainRetroGame(responseRetroGames.data.results)
    } catch (error) {
      navigate("/errorpage");
    }
  };

  if (allRetroPlatforms === null || mainRetroGame === null) {
    return <PacmanLoader color="#f44855" />;
  }

  const volverAtras = () => {
    navigate(-1);
  };

  console.log(allRetroPlatforms)

  const retroPlatformsArr = []
  
  allRetroPlatforms.forEach((eachPlatform) => {
    if (eachPlatform.id === 8 || eachPlatform.id === 9 || eachPlatform.id === 27 || eachPlatform.id === 83 || eachPlatform.id === 24 || eachPlatform.id === 43 || eachPlatform.id === 26 || eachPlatform.id === 107 || eachPlatform.id === 74 || eachPlatform.id === 34) {
      retroPlatformsArr.push(eachPlatform)
    }
  })

  
  
  console.log(retroPlatformsArr)
 

  console.log(allRetroPlatforms)

  const idRetroArr = []
  retroPlatformsArr.forEach((eachPlatform) => {
    idRetroArr.push(eachPlatform.id)
  })


  const carousel = mainRetroGame.slice(0,6)
  
  

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
      <Carousel>
        {carousel.map((eachGame) => {
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
      </Carousel>
      </div>
      
      <div>
        {retroPlatformsArr.map((eachPlatform) => {
          return (
            <Link to={`/retro/${eachPlatform.id}`} className="platforms" key={eachPlatform.id}>
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
