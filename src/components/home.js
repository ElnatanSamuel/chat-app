import React from "react";
import Chat from "./chatbar";

import styles from "./home.module.css";
import Sidebar from "./sidebar";

function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.container}>
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
}

export default Home;
