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

  if (searchGames === null) {
    return <h3>busca un juego</h3>
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
        <h3>busca un juego</h3>
      ) : (
        <div>
          {searchGames.map((eachGame) => {
            return (
              <div key={eachGame.id}>
                <Link to={`/games/${eachGame.id}`}>

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
