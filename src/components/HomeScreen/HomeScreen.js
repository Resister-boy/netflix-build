import React from "react";
import styles from './HomeScreen.css';
import Navigation from "../Navigation/Navigation";

const HomeScreen = () => {
  return (
    <div className={styles.home}>
      <Navigation />
    </div>
  );
}

export default HomeScreen;