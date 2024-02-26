import React from "react";
import { useState } from "react";
import JSON_URL from "../utils/json";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function SalesForm(props) {
  console.log(props.gameOnSale)

  const navigate = useNavigate()
  
  const [condition, setCondition] = useState();
  const [platform, setPlatform] = useState();
  const [price, setPrice] = useState(0);

  const [seller, setSeller] = useState("")


  
  const handleCondition = (event) => {
    setCondition(event.target.value);
  };
  const handlePlatform = (event) => {
    setPlatform(event.target.value);
  };
  const handlePrice = (event) => {
    setPrice(event.target.value);
  };
  const handleSeller = (event) => {
    setSeller(event.target.value)
  }



  const handleSubmit = async (event) => {
    event.preventDefault();

    const nuevaVenta = {
      name: props.gameOnSale.name,
      condition: condition,
      platform: platform,
      price: price,
      background_image: props.gameOnSale.background_image,
      gameApiId: props.gameOnSale.id,
      seller: seller
    };


    try {

      await axios.post(`${JSON_URL}/sales`, nuevaVenta)
      
      navigate("/sales")

      
    } catch (error) {
      console.log(error)
    }

    
  };


  return (
    <div>

      <form onSubmit={handleSubmit}>
      <img src={props.gameOnSale.background_image} alt="juego" width={"180px"}/>
      <h2>{props.gameOnSale.name}</h2>
        
        <label>Estado del juego: </label>
        <select name="condition" onChange={handleCondition} value={condition}>
          <option value=""> --ESTADO DEL JUEGO--</option>
          <option value="new">new</option>
          <option value="semi-new">semi-new</option>
        </select>

        <label>Precio: </label>
        <input name="price" onChange={handlePrice} value={price} type="number">
        </input>

        <label>Plataforma: </label>
        <select name="platform" onChange={handlePlatform} value={platform}>
          <option value=""> --PLATAFORMA--</option>
          {props.gameOnSale.platforms.map((eachElement) => {
            return (<option key={eachElement.platform.id} value="new">{eachElement.platform.name}</option>)
          })}

          {/* AQUI HAY UN PROBLEMA Y ES QUE PONGAS LA PLATAFORMA QUE PONGAS SIEMPRE APARECE LA PRIMERA QUE ES "PC" */}
         
        </select>

        <label>Vendedor: </label>
        <input name="seller" onChange={handleSeller} value={seller} type="text">
        </input>

        

        <button>Poner a la venta</button>
      </form>
    </div>
  );
}

export default SalesForm;
