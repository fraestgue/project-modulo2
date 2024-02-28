import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import API_URL from "../utils/api";
import { Link } from "react-router-dom";


function RetroPage() {
  const [allRetroPlatforms, setAllRetroPlatforms] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    getRetroPlat()
  }, []);

  const getRetroPlat = async () => {
    try {
      const response = await axios.get(
        `${API_URL}/platforms?key=${import.meta.env.VITE_KEY_API}`
      );
        
      setAllRetroPlatforms(response.data.results);
    } catch (error) {
        console.log(error)
    //   navigate("/errorpage");
    }
  };

  if (allRetroPlatforms === null) {
    return <h3>...buscando plataformas</h3>;
  }

  const volverAtras = () => {
    navigate(-1);
  };

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
        
        <Link to={`/retro/${allRetroPlatforms[8].id}`} className="platforms">
            <hr />
        <h2>{allRetroPlatforms[8].name}</h2>
        <hr />
        </Link>
        <Link to={`/retro/${allRetroPlatforms[9].id}`} className="platforms">
        <h2>{allRetroPlatforms[9].name}</h2>
        <hr />
        </Link>
        <Link to={`/retro/${allRetroPlatforms[17].id}`} className="platforms">
        <h2>{allRetroPlatforms[17].name}</h2>
        <hr />
        </Link>
        <Link to={`/retro/${allRetroPlatforms[23].id}`} className="platforms">
        <h2>{allRetroPlatforms[23].name}</h2>
        <hr />
        </Link>
        <Link to={`/retro/${allRetroPlatforms[24].id}`} className="platforms">
        <h2>{allRetroPlatforms[24].name}</h2>
        <hr />
        </Link>
        <Link to={`/retro/${allRetroPlatforms[25].id}`} className="platforms">
        <h2>{allRetroPlatforms[25].name}</h2>
        <hr />
        </Link>
        <Link to={`/retro/${allRetroPlatforms[26].id}`} className="platforms">
        <h2>{allRetroPlatforms[26].name}</h2>
        <hr />
        </Link>
        <Link to={`/retro/${allRetroPlatforms[37].id}`} className="platforms">
        <h2>{allRetroPlatforms[37].name}</h2>
        <hr />
        </Link>
        <Link to={`/retro/${allRetroPlatforms[41].id}`} className="platforms">
        <h2>{allRetroPlatforms[41].name}</h2>
        <hr />
        </Link>
        <Link to={`/retro/${allRetroPlatforms[44].id}`} className="platforms">
        <h2>{allRetroPlatforms[44].name}</h2>
        <hr />
        </Link>
        
      </div>

     
    </div>
  );
}

export default RetroPage;
