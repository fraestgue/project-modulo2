import React, { useEffect, useState } from "react";
import API_URL from "../utils/api";

import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Homepage() {
  const [allPlatforms, setAllPlatforms] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get(
        `${API_URL}/platforms?key=${import.meta.env.VITE_KEY_API}`
      );
      
      setAllPlatforms(response.data);
    } catch (error) {
     
      navigate("/errorpage");
    }
  };

  if (allPlatforms === null) {
    return <h3>...Buscando</h3>;
  }

  const platformArr = allPlatforms.results.slice(0, 6);
 
//foreach
  return (
    <div>
      {platformArr.map((eachPlatform) => {
        return (
          <div key={eachPlatform.id}>
            <Link to={`/platforms/${eachPlatform.id}`}>
              <h2>{eachPlatform.name} </h2>
              <hr />
            </Link>
          </div>
        );
      })}

      <Link to={"/sales"}>
        <h3>Juegos en venta</h3>
      </Link>
    </div>
  );
}

export default Homepage;
