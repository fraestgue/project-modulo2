import React, { useEffect, useState } from "react";
import API_URL from "../utils/api";
import Carousel from "react-bootstrap/Carousel";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

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

  if (allPlatforms === null) {
    return <h3>...Buscando</h3>;
  }

  if (mainGame === null) {
    return <h3>...buscando juegos</h3>;
  }

  console.log(allPlatforms)

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

      {platformArr.map((eachPlatform) => {
        return (
          <div key={eachPlatform.id}>
            <Link to={`/platforms/${eachPlatform.id}`} className="platforms">
              <h2>{eachPlatform.name} </h2>
              <hr />
            </Link>
          </div>
        );
      })}

      <Link to={"/retro"} className="platforms">
        <h2>RETRO</h2>
        <hr />
      </Link>

      <Link to={"/sales"} className="platforms">
        <h3>Juegos en venta</h3>

        <hr />
      </Link>
    </div>
  );
}

export default Homepage;
