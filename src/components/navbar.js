import React from "react";
import styles from "./home.module.css";

function Navbar() {
  return (
    <div className={styles.navbar}>
      <p className={styles.logo}>KTK</p>
      <div className={styles.users}>
        <img
          className={styles.useravatar}
          src="https://www.teahub.io/photos/full/108-1088051_girl-4k-hd-desktop-wallpaper-for-4k.jpg"
          alt=""
        />
        <p className={styles.username}>John</p>
        <button className={styles.logbtn}>Logout</button>
      </div>
    </div>
  );
}

export default Navbar;
