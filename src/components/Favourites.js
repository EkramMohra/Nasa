import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Media from './Media'
import './favourites.css'
export default function Favourites() {
    const [data, setData] = useState([])

    function getData() {
        axios.get('http://localhost:9090/image')
            .then((result) => {
                console.log(result.data);
                setData(result.data)
            }, (error) => {
                console.log(error);
            })
    }
  
    useEffect(() => {
        getData()
    },[])

    return (
        <div className="favourites">
      {  data.map((d, index) => {
            return <Media key={index} media={d} />
         
        })}
        </div>
    )
}