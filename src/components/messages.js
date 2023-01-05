import React from "react";
import styles from "./home.module.css";
// ${styles.ownerbox}
function Messages() {
  return (
    <div className={`${styles.messageBox}`}>
      <div className={styles.messageInfo}>
        <img
          className={styles.imgmessagebox}
          src="https://loveshayariimages.in/wp-content/uploads/2022/05/Stylish-Girls-Whatsapp-Dp-Profile-Images-wallpaper-download-2.jpg"
          alt=""
        />
        <p className={styles.messagepopuptime}>Just now</p>
      </div>
      <div className={styles.messageContent}>
        <p className={styles.actualmsg}>hello</p>
        <img
          className={styles.msgcontentimg}
          src="https://loveshayariimages.in/wp-content/uploads/2022/05/Stylish-Girls-Whatsapp-Dp-Profile-Images-wallpaper-download-2.jpg"
          alt=""
        />
      </div>
    </div>
  );
}

export default Messages;
