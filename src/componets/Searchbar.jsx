import axios from "axios";
import React, { useEffect, useState, CSSProperties } from "react";
import { useNavigate } from "react-router-dom";
import API_URL from "../utils/api";
import { Link } from "react-router-dom";
import { CircleLoader } from "react-spinners";

function Searchbar(props) {
  const navigate = useNavigate();

  const [searchQuery, setSearchQuery] = useState("");
  const [searchGames, setSearchGames] = useState(null);
  const [spinner, setSpinner] = useState(false);

  useEffect(() => {
    if (searchQuery === "") {
      setSearchGames(null);
      setSpinner(false);
      return;
    }

    const delay = setTimeout(async () => {
      try {
        const response = await axios.get(
          `${API_URL}/games?key=${
            import.meta.env.VITE_KEY_API
          }&search=${searchQuery}`
        );

        setSearchGames(response.data.results.slice(0, 5));
        setSpinner(false);
      } catch (error) {
        navigate("/errorpage")
      }
    }, 1500);

    return () => clearInterval(delay);
  }, [searchQuery]);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
    setSpinner(true);
  };

  const handleClear = (event) => {
    // que desaparezcan los juegos buscados
    // que se borre lo que hay dentro de la barra de buscar
    setSearchQuery("");
    setSearchGames(null);
  };

  return (
    <div>
      <div className="spinner">
        <input
          className="barra"
          autoFocus
          type="text"
          autoComplete="off"
          placeholder="busca tu juego aquí"
          value={searchQuery}
          onChange={handleSearch}
        />

        {spinner === true && <CircleLoader color="#f44855" />}
      </div>

      {searchGames === null ? null : (
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
