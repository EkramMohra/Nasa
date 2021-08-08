import React, {useState } from 'react'
import SearchBar from './searchBar'
import Media from './Media'
import axios from 'axios';
import './search.css'


export default function Search() {
   
    const [searchValue, setSearchValue] = useState("")
    const [searchResult, setSearchResult] = useState([])
    let url

    function Search () {
        url = `https://images-api.nasa.gov/search?q=${searchValue}`
        axios.get(url)
            .then((response) => {
                
                setSearchResult(response.data.collection.items)

            }).catch((err) => {
                console.log(err);
            });
    }
    function handleChange(newValue) {
        setSearchValue(newValue);
        Search()

    }
    


    return (
        <div>
            <SearchBar value={searchValue} onChange={handleChange} />
            <div className="media">   {searchResult.map((s,index )=> {
                return <Media key={index} media={{title:s.data[0].title,imgUrl:s.links[0].href,desc:s.data[0].description}} />
                  
            })}
            </div>
        </div>
    )
}
