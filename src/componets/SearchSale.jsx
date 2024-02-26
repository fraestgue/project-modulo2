import axios from 'axios'
import React, { useState } from 'react'
import API_URL from '../utils/api'

function SearchSale(props) {
    console.log(props)

    const [searchQuery, setSearchQuery] = useState()

    const handleSearch = (event) => {
        setSearchQuery(event.target.value)
        console.log(event.target.value)
        
    }


    const handleSubmit = async (event) => {
        
        event.preventDefault()
        try {
            
            const response = await axios.get(`${API_URL}/games?key=${import.meta.env.VITE_KEY_API}&search=${searchQuery}`)
            console.log(response.data)

            props.setSearchGames(response.data.results.slice(0,5))


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
        <button onClick={handleSubmit}>Buscar</button>
       
    </div>
  )
}

export default SearchSale