import React, { useEffect, useState } from "react";
import "./Navigation.css";

const Navigation = () => {
  const [show, handleShow] = useState(false);

  const checkNavState = () => {
    if (window.scrollY > 100)
      handleShow(true);
    else
      handleShow(false);
  }

  useEffect(() => {
    window.addEventListener("scroll", checkNavState);
    return () => window.addEventListener("scroll", checkNavState)
  }, []);
  return (
    <div className={`navigation ${show && 'nav__black'}`}>
      <div className="nav__contents">
        <img 
          className="nav__logo"
          src="../../source/Logo.svg" 
          alt="Logo" />
        <img 
          className="nav__avatar"
          src="../../source/Avatar.png" 
          alt="Avartar" />
      </div>
    </div>
  );
}

export default Navigation;