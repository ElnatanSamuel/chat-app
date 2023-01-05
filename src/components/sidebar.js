import React from "react";
import styles from "./home.module.css";
import Navbar from "./navbar";
import Search from "./search";

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Navbar />
      <Search />
    </div>
  );
}

export default Sidebar;
