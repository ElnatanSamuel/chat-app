import React from "react";
import styles from "./register.module.css";
import Avatar from "../assets/avatar.png";

const Register = () => {
  return (
    <div>
      <div className={styles.formContainer}>
        <div className={styles.formWrapper}>
          <p className={styles.title}>Register</p>
          <form className={styles.formElements}>
            <label className={styles.avatarlabel} htmlFor="avatar">
              <img className={styles.avatar} src={Avatar} alt="avatar" />
              <p className={styles.avatartext}>+ add an avatar</p>
            </label>
            <input style={{ display: "none" }} type="file" id="avatar" />
            <input
              className={styles.inputform}
              type="name"
              placeholder="Name"
            />
            <input
              className={styles.inputform}
              type="email"
              placeholder="Email"
            />
            <input
              className={styles.inputform}
              type="password"
              placeholder="Password"
            />

            <button className={styles.btnregister}>Sign up</button>
          </form>
          <p className={styles.lastnote}>Already have an account? Login</p>
        </div>
      </div>
    </div>
  );
};

export default Register;
