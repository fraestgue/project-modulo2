import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API_URL from "../utils/api";
import { Link } from "react-router-dom";

function Searchbar(props) {
  const navigate = useNavigate();

  const [searchQuery, setSearchQuery] = useState("");
  const [searchGames, setSearchGames] = useState(null);

  useEffect(() => {

    if (searchQuery === "") {
      return 
    }
    const delay = setTimeout(() => {
      try {
        const response = axios
          .get(
            `${API_URL}/games?key=${
              import.meta.env.VITE_KEY_API
            }&search=${searchQuery}`
          )
          .then((response) => {
            console.log(response.data.results.slice(0, 5));
            setSearchGames(response.data.results.slice(0, 5));
          });
      } catch (error) {
        console.log(error);
      }
    }, 1500);

    return () => clearInterval(delay);
  }, [searchQuery]);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleClear = (event) => {
    // que desaparezcan los juegos buscados
    // que se borre lo que hay dentro de la barra de buscar
    setSearchQuery("")
    setSearchGames(null)
  }


  return (
    <div>
      <input
        autoFocus
        type="text"
        autoComplete="off"
        placeholder="busca tu juego aquí"
        value={searchQuery}
        onChange={handleSearch}
      />

      {searchGames === null ? (
        null
      ) : (
        <div>
          {searchGames.map((eachGame) => {
            return (
              <div key={eachGame.id} onClick={handleClear}>
                <Link to={`/games/${eachGame.id}`} className={"platforms"}>

                <img
                  src={eachGame.background_image}
                  alt="juego"
                  width={"120px"}
                />
                <h3>{eachGame.name}</h3>
                </Link>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Searchbar;
