import React from "react";
import styles from "./home.module.css";
import { UilPaperclip } from "@iconscout/react-unicons";
import { UilSmile } from "@iconscout/react-unicons";
import { UilMicrophone } from "@iconscout/react-unicons";

function Input() {
  return (
    <div className={styles.inputmes}>
      <label className={styles.sendlabel} htmlFor="avatar">
        <UilPaperclip className={styles.messagebuttonsicon} size="25" />
      </label>
      <input style={{ display: "none" }} type="file" id="avatar" />
      <input
        className={styles.messageinput}
        type="text"
        placeholder="Write something..."
      />
      <div className={styles.send}>
        <UilSmile className={styles.messagebuttonsicon} size="25" />
        <UilMicrophone className={styles.messagebuttonsicon} size="25" />
        <button className={styles.sendbtn}>Send</button>
      </div>
    </div>
  );
}

export default Input;
