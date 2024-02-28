import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

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
      navigate("/errorpage");
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

      <img src={allRetroPlatforms[8].background_image} alt="plat" />
    </div>
  );
}

export default RetroPage;
