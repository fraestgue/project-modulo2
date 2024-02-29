import axios from "axios";
import React, { useEffect, useState, CSSProperties } from "react";
import { useNavigate, useParams } from "react-router-dom";
import JSON_URL from "../utils/json";
import EditarVenta from "../componets/EditarVenta";
import API_URL from "../utils/api";
import { PacmanLoader } from "react-spinners";


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

  if (salesDetails === null || dataGameApi === null) {
    return <PacmanLoader color="#f44855" />;
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
      <div>

      <button onClick={volverAtras} type="button" className="nes-btn is-warning">
      🔙
      </button>
      </div>
      <h2 className="nes-container is-rounded is-dark">{salesDetails.name}</h2>
      <img src={salesDetails.background_image} alt="juego" width={"400px"} height={"250px"} />
      <div className="lists">
        <ul className="nes-list is-circle nes-container is-rounded is-dark">
      <li>Estado: {salesDetails.condition}</li>
      <li>Precio: {salesDetails.price} €</li>
      <li>Plataform: {salesDetails.platform}</li>
      <li>Vendedor: {salesDetails.seller}</li>
      </ul>
      </div>


      <div className="nes-container is-dark with-title">
  <p className="title">{salesDetails.name}</p>
  <p>{dataGameApi.description_raw}</p>
</div>
      {/* <p>{dataGameApi.description_raw}</p> */}


      <button onClick={handleToggleUpdateForm} type="button" className="nes-btn is-warning">
        Modificar valores de la venta
      </button>
      <button onClick={handleRemoveSale} type="button" className="nes-btn is-warning icon-list">
      <i className="nes-icon close is-small"></i> Elimina la venta</button>
      {isUpdateFormShowing === true ? <EditarVenta salesDetails={salesDetails} dataGameApi={dataGameApi}/> :null}



    </div>
  );
}

export default DetallesVenta;
