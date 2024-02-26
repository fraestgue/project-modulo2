import React from "react";
import { useState } from "react";

function SalesForm(props) {
  const [name, setName] = useState(props.gameOnSale.name);
  const [condition, setCondition] = useState();
  const [platform, setPlatform] = useState();
  const [price, setPrice] = useState();

  const [image, setImage] = useState(props.gameOnSale.background_image);
  const [quantity, setQuantity] = useState();//Preguntar a JORGE

  const handleName = (event) => {
    setName(event.target.value);
  };
  const handleCondition = (event) => {
    setCondition(event.target.value);
  };
  const handlePlatform = (event) => {
    setPlatform(event.target.value);
  };
  const handlePrice = (event) => {
    setPrice(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const nuevaVenta = {
      name: name,
      condition: condition,
      platform: platform,
      price: price,
      background_image: image
    };

    props.setGameOnSale ((valorActual) => {
    console.log(valorActual)
    let clone = JSON.parse(JSON.stringify(valorActual))
    clone.unshift(nuevaVenta)
    return clone
    })
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        
        <label>Estado del juego: </label>
        <select name="condition" onChange={handleCondition} value={condition}>
          <option value=""> --NONE--</option>
          <option value="new">new</option>
          <option value="semi-new">semi-new</option>
        </select>

        <label>Precio: </label>
        <input name="price" onChange={handlePrice} value={price} type="number">
        </input>

        <label>Plataforma: </label>
        <select name="platform" onChange={handlePlatform} value={platform}>
          <option value=""> --NONE--</option>
          <option value="new"></option>
        </select>

        <button>Poner a la venta</button>
      </form>
    </div>
  );
}

export default SalesForm;
