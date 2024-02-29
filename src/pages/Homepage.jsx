import React, { useEffect, useState } from "react";
import API_URL from "../utils/api";
import Carousel from "react-bootstrap/Carousel";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

import pc from "../assets/pcgame.png"
import ps5 from "../assets/ps5-logo.png"
import ps4 from "../assets/ps4-logo.png"
import xboxone from "../assets/xboxone-logo.png"
import xboxsx from "../assets/xboxsx-logo.png"
import nints from "../assets/switch-logo.png"
import retro from "../assets/retro.png"

import Pacman from "../componets/Pacman";

function Homepage() {
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

      setAllPlatforms(response.data);
      setMainGame(responseGames.data.results);
    } catch (error) {
      navigate("/errorpage");
    }
  };

  if (allPlatforms === null || mainGame === null) {
    return <Pacman />;
  }

  

  const indiceRandom = Math.floor(Math.random() * mainGame.length);

  const platformArr = allPlatforms.results.slice(0, 6);
  const gameArr = mainGame.slice(indiceRandom, indiceRandom + 5);
  // console.log(gameArr)




  //foreach
  return (
    <div>
      <Carousel>
        {gameArr.map((eachGame) => {
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
      <hr />

      {platformArr.map((eachPlatform) => {
        let logoPlat;
         if (eachPlatform.id === 4) {
          logoPlat = pc
        } else if (eachPlatform.id === 187) {
          logoPlat = ps5
        } else if (eachPlatform.id === 18) {
          logoPlat = ps4
        } else if (eachPlatform.id === 1) {
          logoPlat = xboxone
        } else if (eachPlatform.id === 186) {
          logoPlat = xboxsx
        } else if (eachPlatform.id === 7) {
          logoPlat = nints
        }
        return (
          <div key={eachPlatform.id}>
            <Link to={`/platforms/${eachPlatform.id}`} className="platforms">
      
              <img src={logoPlat} alt="logo" width={"150px"} height={"130px"} />
              <h2>{eachPlatform.name} </h2>
              <hr />
            </Link>
          </div>
        );
      })}

      <Link to={"/retro"} className="platforms">
        <img src={retro} alt="retro" width={"150px"} height={"130px"} />
        <h2>RETRO</h2>
        <hr />
      </Link>

    
    </div>
  );
}

export default Homepage;
