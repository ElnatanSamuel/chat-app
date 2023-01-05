import React from "react";
import Chats from "./chats";
import styles from "./home.module.css";

function Search() {
  return (
    <div className={styles.search}>
      <div className={styles.searchinput}>
        <input
          className={styles.inputsearch}
          type="text"
          placeholder="Search user"
        />
      </div>
      <Chats />
    </div>
  );
}

export default Search;
