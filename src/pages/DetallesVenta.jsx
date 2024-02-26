import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import JSON_URL from "../utils/json";

function DetallesVenta() {
  const params = useParams();
  const navigate = useNavigate();

  const [salesDetails, setSalesDetails] = useState(null);

  useEffect(() => {
    getDetails();
  }, []);

  const getDetails = async () => {
    try {
      const response = await axios.get(`${JSON_URL}/sales/${params.salesId}`);
      console.log(response.data);
      setSalesDetails(response.data);
    } catch (error) {
      console.log(error);
      navigate("/errorpage");
    }
  };

  if (salesDetails === null) {
    return <h3>...buscando</h3>;
  }

  return (
    <div>
      <img src={salesDetails.background_image} alt="juego" width={"120px"} />
      <h2>{salesDetails.name}</h2>
      <h3>Estado: {salesDetails.condition}</h3>
      <h3>Precio: {salesDetails.price}</h3>
      <h4>Plataform: {salesDetails.platform}</h4>
      <h5>Ejemplares disponibles: {salesDetails.quantity}</h5>
      <p>{salesDetails.description}</p>
    </div>
  );
}

export default DetallesVenta;
