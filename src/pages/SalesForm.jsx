import React, { useState } from "react";
import SearchSale from "../componets/SearchSale";

function SalesForm() {

    const [game, setGame] = useState()
//   const [name, setName] = useState();
//   const [condition, setCondition] = useState();
//   const [platform, setPlatform] = useState();
//   const [price, setPrice] = useState();

//   const [image, setImage] = useState();
//   const [description, setDescription] = useState();
//   const [quantity, setQuantity] = useState();

//   const handleName = (event) => {
//     setName(event.target.value);
//   };
//   const handleCondition = (event) => {
//     setCondition(event.target.value);
//   };
//   const handlePlatform = (event) => {
//     setPlatform(event.target.value);
//   };
//   const handlePrice = (event) => {
//     setPrice(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     const nuevaVenta = {
//       name: name,
//       condition: condition,
//       platform: platform,
//       price: price,
//     };
//   };

  return (
    <div>

        <SearchSale setGame={setGame} />
      {/* <form>
        <label>Juego: </label>
        <select name="name" onChange={handleName} value={name}>
          <option value="" > --NONE-- 
          </option>
          <option value= ""></option>
        </select>
        <label>Estado del juego: </label>
        <select name="condition" onChange={handleCondition} value={condition}>
          <option value="" > --NONE-- 
          </option>
          <option value= "new">new</option>
          <option value= "semi-new">semi-new</option>

        </select>
        <label>Juego: </label>
        <input
        <label>Juego: </label>
        <select name="name" onChange={handleName} value={name}>
          <option value="" > --NONE-- 
          </option>
          <option value= ""></option>
        </select>
      </form> */}
    </div>
  );
}

export default SalesForm;
