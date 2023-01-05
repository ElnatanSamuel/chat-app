import React from "react";
import styles from "./home.module.css";
import { UilVideo } from "@iconscout/react-unicons";
import { UilUserPlus } from "@iconscout/react-unicons";
import { UilEllipsisH } from "@iconscout/react-unicons";
import Message from "./message";
import Input from "./input";

function Chat() {
  return (
    <div className={styles.chat}>
      <div className={styles.chatnav}>
        <div className={styles.navchat}>
          <p className={styles.chatuser}>Jane</p>
          <div className={styles.chatavatar}>
            <UilVideo size="40" className={styles.chatavatar} />

            <UilEllipsisH size="40" className={styles.chatavatar} />
          </div>
        </div>
      </div>
      <Message />
      <Input />
    </div>
  );
}

export default Chat;
