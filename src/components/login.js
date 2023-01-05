import React from "react";
import styles from "./register.module.css";

const Login = () => {
  return (
    <div>
      <div className={styles.formContainer}>
        <div className={styles.formWrapper}>
          <p className={styles.title}>Login</p>
          <form className={styles.formElements}>
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
          <p className={styles.lastnote}>You don't have an account? Register</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
