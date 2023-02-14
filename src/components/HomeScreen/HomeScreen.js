import React from "react";
import styles from './HomeScreen.css';
import Navigation from "./Navigation/Navigation";
import Banner from "./Banner/Banner"

const HomeScreen = () => {
  return (
    <div className={styles.home}>
      <Navigation />
      <Banner />
    </div>
  );
}

export default HomeScreen;