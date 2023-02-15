import React, { useEffect, useState } from "react";
import axios from '../../../axios';
import requests from '../../../Request'; 
import "./Banner.css";


// "https://i.imgur.com/e1hLQ2m.png

const Banner = () => {
  const [movie, setmovie] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals)
      setmovie(request.data.results[Math.floor(Math.random() * request.data.results.length - 1)])
      return (request);
    }
    fetchData();
  }, [])
  console.log(movie);
  const translate = (string, n) => {
    if (!string)
      return (console.error("error"));
    if (string.length > n)
      return (string.substr(0, n - 1) + '...');
    return (string);
  }

  return (
    <header 
      className="banner" 
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
      }}>
      <div className="ban__contents">
        <h1 className="ban__title">{movie?.title || movie?.name || movie?.original_name}</h1>
        <div className="ban__button_container">
          <button className="ban__button">Play</button>
          <button className="ban__button">Add My List</button>
        </div>
        <h1 className="ban__description">{translate(movie?.overview, 150)}</h1>
      </div>
      <div className="ban__fade">

      </div>
    </header>
  );
}
export default Banner;