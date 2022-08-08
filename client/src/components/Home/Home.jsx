import React from "react";

import styles from "./Home.module.css";
import HomeMain from "./HomeMain/HomeMain";
import Sidebar from "./Sidebar/Sidebar";

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.sidebar}>
        <Sidebar />
      </div>

      <div className={styles.body}>
        <HomeMain />
      </div>
    </div>
  );
};

export default Home;
