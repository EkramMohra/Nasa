import React, { useEffect, useState } from 'react'
import { useLocation, Link } from "react-router-dom"
import './media.css'
import { AiFillDislike, AiFillLike } from 'react-icons/ai';
import axios from 'axios';
import ReactPlayer from 'react-player'

export default function MediaCard(props) {

  const location = useLocation().pathname;
  const [liked, setLiked] = useState((location === "/search") ? false : true)
  const [data, setData] = useState([])
  function home() {

    return <div>
      title:<div>{props.media.title}
      </div>
      {checkURL(props.media.image) ? <img class="img" alt="NasaImg" src={props.media.image} /> : <ReactPlayer url={props.media.image} />}
      <div> description: {props.media.desc}</div>

    </div>
  }
  function checkURL(url) {
    return (url.match(/\.(jpeg|jpg|gif|png)$/) != null);
  }

  function changeIcon() {

    setLiked(!liked)
    liked ? deleteFromDB() : addtoDB()
  }

  function addtoDB() {
    let obj = {
      title: props.media.title,
      imgUrl: props.media.imgUrl,
      description: props.media.desc
    }
    axios.post('http://localhost:9090/images', obj)
      .then((response) => {
        console.log(response.data.message);
      }, (error) => {
        console.log(error);
      })
  }
  function deleteFromDB() {
    axios.delete(`http://localhost:9090/image/${props.media._id}`)
      .then((response) => {
        console.log(response.data);
      }, (error) => {
        console.log(error);
      })
  }

  function getById(id) {
    axios.get(`http://localhost:9090/image?id=${id}`)
      .then((result) => {
        setData(result.data[0])
      }, (error) => {
        console.log(error);
      })
  }

  useEffect(() => {
    (!props.match) ? console.log("no") : getById(props.match.params.id)

  }, [])
 
  function displayFavouriteInfo() {

    return <div>
      title:<div>{data.title}
      </div>
      <img className="img" alt="NasaImg" src={data.imgUrl} />
      <div> description: {data.description}</div>
      <div>{liked ? <AiFillDislike onClick={changeIcon} /> : <AiFillLike onClick={changeIcon} />}</div>
    </div>
  }

  function show() {

    return <div >
      {location === '/favourites' ? <Link to={`/favourite/${props.media._id}`}>
        <img className="img" alt="NasaImg" src={!props.media.imgUrl ? "" : props.media.imgUrl} /></Link> :
        <img className="img" alt="NasaImg" src={!props.media.imgUrl ? "" : props.media.imgUrl} />}
      <div>Title:{props.media.title}</div>
      <div>{liked ? <AiFillDislike onClick={changeIcon} /> : <AiFillLike onClick={changeIcon} />}</div>
    </div>
  }


  return (

    (location === "/home") ? home() : (location === "/search") || (location === "/favourites") ? show() : displayFavouriteInfo()
  )
}
