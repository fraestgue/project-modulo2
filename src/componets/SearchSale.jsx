import axios from 'axios'
import React, { useState } from 'react'
import API_URL from '../utils/api'

function SearchSale(props) {

    const [searchQuery, setSearchQuery] = useState()

    const handleSearch = async (event) => {
        setSearchQuery(event.target.value)
        console.log(event.target.value)
        try {
            
            const response = await axios.get(`${API_URL}/games?key=${import.meta.env.VITE_KEY_API}&search=${event.target.value}`)
            console.log(response.data)

            props.setGame(response.data)


        } catch (error) {
            console.log(error)
        }
    } 



  return (
    <div>
        Buscar
        <input type="text" 
        value={searchQuery}
        onChange={handleSearch}
        />
    </div>
  )
}

export default SearchSale