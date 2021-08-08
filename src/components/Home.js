import React, { useEffect, useState } from 'react'
import Media from './Media'
import axios from 'axios';
export default function Home() {
  
    const url = "https://api.nasa.gov/planetary/apod?api_key=eT4KVpT2ojfu5KJIJJvZBTUHQYlmG65ociJFoRuG"


    const [media, setMedia] = useState({ image: "", title: "", desc: "" })

    useEffect(() => {
        console.log(url);
        axios.get(url)
            .then((response) => {
                console.log(response.data);
                setMedia({...media, image: response.data.hdurl, title: response.data.title, desc: response.data.explanation })
            })

    },[])

    return (<div>

        <Media media={media} />
    </div>
    )
}