import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import JSON_URL from "../utils/json";
import EditarVenta from "../componets/EditarVenta";

function DetallesVenta() {
  const params = useParams();
  const navigate = useNavigate();

  const [salesDetails, setSalesDetails] = useState(null);

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

  const handleRemoveSale = async () => {
    try {
      await axios.delete(`${JSON_URL}/sales/${params.salesId}`)
      setSalesDetails(null)
      navigate("/sales")
    } catch (error) {
      console.log(error)
    }

  }

  return (
    <div>
      <img src={salesDetails.background_image} alt="juego" width={"120px"} />
      <h2>{salesDetails.name}</h2>
      <h3>Estado: {salesDetails.condition}</h3>
      <h3>Precio: {salesDetails.price}</h3>
      <h4>Plataform: {salesDetails.platform}</h4>
      <h5>Vendedor: {salesDetails.seller}</h5>
      <p>{salesDetails.description}</p>


      <button onClick={handleToggleUpdateForm}>
        Modificar valores de la venta
      </button>
      <button onClick={handleRemoveSale}>Elimina la venta</button>
      {isUpdateFormShowing === true ? <EditarVenta salesDetails={salesDetails} /> :null}



    </div>
  );
}

export default DetallesVenta;
