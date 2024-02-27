import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import JSON_URL from "../utils/json"
import API_URL from '../utils/api'

function EditarVenta(props) {

  const params = useParams()
  const navigate = useNavigate()

  const [price, setPrice] = useState(props.salesDetails.price)
  const [condition, setCondition] = useState(props.salesDetails.condition)
  const [platform, setPlatform] = useState(props.salesDetails.platform)
  const [seller, setSeller] = useState(props.salesDetails.seller)
  const [gameDetails, setGameDetails] = useState()

  const handlePrice = (event) => {
    setPrice(event.target.value)
  }
  const handleCondition = (event) => {
    setCondition(event.target.value)
  }
  const handlePlatform = (event) => {
    setPlatform(event.target.value)
  }
  const handleSeller = (event) => {
    setSeller(event.target.value)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    const actualizarVenta = {
      name: props.salesDetails.name,
      condition: condition,
      platform: platform,
      price: price,
      background_image: props.salesDetails.background_image,
      gameApiId: props.salesDetails.gameApiId,
      seller: seller
    }
    try {

      await axios.put(`${JSON_URL}/sales/${params.salesId}`, actualizarVenta)
      
      navigate("/sales")

      
    } catch (error) {
      
      navigate("/errorpage")
    }
  }

  const getDataApi = async () => {
    try {
      const response = await axios.get(`${API_URL}/games/${props.salesDetails.gameApiId}?key=${import.meta.env.VITE_KEY_API}`)
      setGameDetails(response.data)

    } catch (error) {
      
      navigate("/errorpage")
    }
  }
  
  getDataApi()
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        
        <label>Estado del juego: </label>
        <select name="condition" onChange={handleCondition} value={condition}>
          <option value=""> --{props.salesDetails.condition}--</option>
          <option value="new">new</option>
          <option value="semi-new">semi-new</option>
        </select>

        <label>Precio: </label>
        <input name="price" onChange={handlePrice} value={price} type="number">
        </input>

        <label>Plataforma: </label>
        <select name="platform" onChange={handlePlatform}>
          <option value={props.salesDetails.platform}> --{props.salesDetails.platform}--</option>
          {props.dataGameApi.platforms.map((eachElement) => {
            return (<option key={eachElement.platform.id} value={eachElement.platform.name}>{eachElement.platform.name}</option>)
          })}
          </select>
          <label>Vendedor: </label>
        <input name="seller" onChange={handleSeller} value={seller} type="text">
        </input>
        <div>
          <button>Guarda tus cambios</button>
        </div>
      </form>
      
    </div>
  )
}

export default EditarVenta