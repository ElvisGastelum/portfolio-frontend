import React from "react";

import styles from "./styles.module.css";

export default function Header({headerRef}) {
  return (
    <header ref={headerRef}>
      <div className={styles["header-container"]}>
        <div className={styles["header-text"]}>
          <h1 className={styles["header-title"]}>ELVIS GASTELUM</h1>
          <h2 className={styles["header-subtitle"]}>Web Developer</h2>
        </div>
        <div className={styles["buttons"]}>
          <a className={styles["button"]} href="#contact">
            <i className={styles["button-icon"] + " fas fa-address-book"}></i>
            <span className={styles["button-text"]}>Contact</span>
          </a>
          <a
            className={styles["button"]}
            href="https://github.com/ElvisGastelum"
          >
            <i className={styles["button-icon"] + " fab fa-github"}></i>
            <span className={styles["button-text"]}>GitHub</span>
          </a>
        </div>
      </div>
    </header>
  );
}
