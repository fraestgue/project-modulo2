import React, { useEffect, useState } from 'react'
import API_URL from "../utils/api"
import KEY_API from "../utils/keyapi"
import axios from "axios";
import { Link } from 'react-router-dom';

function Homepage() {

    const [allPlatforms, setAllPlatforms] = useState(null)

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        try {

            const response = await axios.get(`${API_URL}/platforms${KEY_API}`)
            // console.log(response.data)
            setAllPlatforms(response.data)


            
        } catch (error) {
            console.log(error)
        }
    }


    if (allPlatforms === null) {
        return <h3>...Buscando</h3>
    }

    const platformArr = allPlatforms.results



  return (
    <div>
        <Link to={`/platforms/${platformArr[0].id}`}>
        <h2>{platformArr[0].name} </h2>  
        <hr />
        </Link>
        <Link to={`/platforms/${platformArr[1].id}`}>
        <h2>{platformArr[1].name} </h2>  
        <hr />
        </Link>
        <Link to={`/platforms/${platformArr[2].id}`}>
        <h2>{platformArr[2].name} </h2>  
        <hr />
        </Link>
        <Link to={`/platforms/${platformArr[3].id}`}>
        <h2>{platformArr[3].name} </h2>  
        <hr />
        </Link>
        <Link to={`/platforms/${platformArr[5].id}`}>
        <h2>{platformArr[5].name} </h2>  
        <hr />
        </Link>
        <Link to={`/platforms/${platformArr[4].id}`}>
        <h2>{platformArr[4].name} </h2>  
        <hr />
        </Link>


    </div>
  )
}

export default Homepage