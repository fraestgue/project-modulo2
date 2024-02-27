import React, { useEffect, useState } from "react";
import JSON_URL from "../utils/json";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function JuegosEnVenta() {
  const [gameSales, setGameSales] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    getGameSales();
  }, []);

  const getGameSales = async () => {
    try {
      const response = await axios.get(`${JSON_URL}/sales`);
      
      setGameSales(response.data);
    } catch (error) {
      
      navigate("/errorpage");
    }
  };

  if (gameSales === null) {
    return <h3>...buscando</h3>;
  }

  const volverAtras = () => {
    navigate(-1)
  }

  

  return (
    <div>
      <button onClick={volverAtras}  type="button"
        className="nes-btn is-warning">
        🔙
      </button>
      {gameSales.map((eachGame) => {
        return (
          <div key={eachGame.id}>
            <Link to={`/sales/${eachGame.id}`}>
              <img
                src={eachGame.background_image}
                alt="juego"
                width={"120px"}
              />
              <h3>{eachGame.name}</h3>
              <h3>Precio: {eachGame.price} €</h3>
              <hr />
            </Link>
          </div>
        );
       
      })}
       <Link to={"/sales/form"}>
        <button type="button" className="nes-btn is-warning">Pon un juego a la venta</button>
      </Link>
    </div>
  );
}

export default JuegosEnVenta;
