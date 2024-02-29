import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import API_URL from "../utils/api";
import JSON_URL from "../utils/json";
import { Link } from "react-router-dom";
import Pacman from "../componets/Pacman";

import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';


import axios from "axios";

function GameDetailsPage() {
  const params = useParams();
  const navigate = useNavigate();

  const [game, setGame] = useState(null);
  const [sales, setSales] = useState(null);
  const [open, setOpen] = useState(false)

  useEffect(() => {
    getGames();
  }, [params.gameId]);

  const getGames = async () => {
    try {
      const response = await axios.get(
        `${API_URL}/games/${params.gameId}?key=${import.meta.env.VITE_KEY_API}`
      );
      const responseJson = await axios.get(`${JSON_URL}/sales?gameApiId=${params.gameId}`);
      console.log(responseJson.data);
      setGame(response.data);
      setSales(responseJson.data);
    } catch (error) {
      navigate("/errorpage");
    }
  };

  if (game === null) {
    return <Pacman/>;
  }
  if (sales === null) {
    return;
  }

  // podemos hacer funcion fuera y pasarla o hacer la funcion anonima

  const volverAtras = () => {
    navigate(-1);
  };

  console.log(sales);

  return (
    <div>
      <button
        type="button"
        className="nes-btn is-warning"
        onClick={volverAtras}
      >
        🔙
      </button>
      <h2 className="nes-container is-rounded is-dark">{game.name}</h2>
      <img
        src={game.background_image}
        alt="juego"
        width={"400px"}
        height={"250px"}
      />

      <div className="nes-container is-dark with-title">
        <p className="title" onClick={() => {setOpen(!open)}}>{game.name} descripción 🔻</p>
        {open && (<p>{game.description_raw}</p>)}
      </div>

      <div className="lists">
        <ul className="nes-list is-circle nes-container is-rounded is-dark">
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
      <div>
        {sales.length > 0 ? sales.map((eachSale) => {
          return (
          <div className="nes-container is-rounded is-dark card" key={eachSale.id}>
            <Link to={`/sales/${eachSale.id}`} className={"platforms"}>
          <h3>{eachSale.name}</h3>
          <h3>Vendedor: {eachSale.seller}</h3>
          <h5>{eachSale.price} €<span className="nes-icon coin is-small"></span></h5>
          <h6>{eachSale.condition}</h6>
          </Link>
          </div>

          )
        }) : <div className="nes-container is-rounded is-dark" >
          <h5>
            {game.name} no esta aun a la venta
          </h5>
           </div>}
  
      </div>
    </div>
  );
}

export default GameDetailsPage;
