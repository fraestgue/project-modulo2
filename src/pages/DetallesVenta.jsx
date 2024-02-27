import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import JSON_URL from "../utils/json";
import EditarVenta from "../componets/EditarVenta";
import API_URL from "../utils/api";

function DetallesVenta() {
  const params = useParams();
  const navigate = useNavigate();

  const [salesDetails, setSalesDetails] = useState(null);
  
  const [dataGameApi, setDataGameApi] = useState(null);

  const [isUpdateFormShowing, setIsUpdateFormShowing] = useState(false)

    const handleToggleUpdateForm = () => {
        setIsUpdateFormShowing(!isUpdateFormShowing)
    }



  useEffect(() => {
    getDetails();
    
  }, []);

  const getDetails = async () => {
    try {
      const response = await axios.get(`${JSON_URL}/sales/${params.salesId}`);
      
      setSalesDetails(response.data);

      const responseAPI = await axios.get(`${API_URL}/games/${response.data.gameApiId}?key=${import.meta.env.VITE_KEY_API}`)
      
      setDataGameApi(responseAPI.data)
    } catch (error) {
      
      navigate("/errorpage");
    }
  };

  if (salesDetails === null) {
    return <h3>...buscando</h3>;
  }
  if (dataGameApi === null) {
    return <h3>...buscando</h3>
  }

  const handleRemoveSale = async () => {
    try {
      await axios.delete(`${JSON_URL}/sales/${params.salesId}`)
      setSalesDetails(null)
      navigate("/sales")
    } catch (error) {
      
      navigate("/errorpage")
    }

  }

  const volverAtras = () => {
    navigate(-1)
  }


  return (
    <div>
      <button onClick={volverAtras}>
        atrás
      </button>
      <img src={salesDetails.background_image} alt="juego" width={"120px"} />
      <h2>{salesDetails.name}</h2>
      <h3>Estado: {salesDetails.condition}</h3>
      <h3>Precio: {salesDetails.price}</h3>
      <h4>Plataform: {salesDetails.platform}</h4>
      <h5>Vendedor: {salesDetails.seller}</h5>
      <p>{dataGameApi.description_raw}</p>


      <button onClick={handleToggleUpdateForm}>
        Modificar valores de la venta
      </button>
      <button onClick={handleRemoveSale}>Elimina la venta</button>
      {isUpdateFormShowing === true ? <EditarVenta salesDetails={salesDetails} dataGameApi={dataGameApi}/> :null}



    </div>
  );
}

export default DetallesVenta;
