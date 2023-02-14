import React from "react";
import "./Banner.css"
// "https://i.imgur.com/e1hLQ2m.png
const Banner = () => {
  return (
    <header 
      className="banner" 
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundImage: `url("")`,
      }}>
      <div className="ban__contents">
        <h1 className="ban__title">Movie Name</h1>
        <div className="ban__button">
          <button className="ban__button">Play</button>
          <button className="ban__button">Add My List</button>
        </div>
        <h1 className="ban__description">This is test Desciption</h1>
      </div>
      <div className="ban__fade">

      </div>
    </header>
  );
}
export default Banner;