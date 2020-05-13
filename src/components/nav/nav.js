import React from "react";

import styles from "./styles.module.css";
import logo from "./img/logo.svg";

export default function Nav() {
  return (
    <nav className={styles["navigation"]}>
      <div className={styles["navigation-logo"]}>
        <a href="#top">
          <img src={logo} alt="logo" />
        </a>
      </div>
      <div className={styles["navigation-links"]}>
        <a className={styles["navigation-link"]} href="cv.pdf">
          <div className={styles["navigation-link-icon"]}>
            <i className="fas fa-file-contract"></i>
          </div>
          <span className={styles["navigation-link-text"]}>CV</span>
        </a>
        <a className={styles["navigation-link"]} href="#about">
          <div className={styles["navigation-link-icon"]}>
            <i className="fas fa-address-card"></i>
          </div>
          <span className={styles["navigation-link-text"]}>About</span>
        </a>
        <a className={styles["navigation-link"]} href="#contact">
          <div className={styles["navigation-link-icon"]}>
            <i className="fas fa-address-book"></i>
          </div>
          <span className={styles["navigation-link-text"]}>Contact</span>
        </a>
      </div>
    </nav>
  );
}
