import React from "react";

import styles from "./styles.module.css";

export function Footer() {
  return (
    <footer className={styles["footer"]}>
      <span>
        Elvis Gastelum © 2020 - Web Developer |{" "}
        <a href="https://github.com/ElvisGastelum/portfolio">
          <i className={styles["button-icon"] + " fab fa-github"}></i>
          Repository
        </a>
      </span>
    </footer>
  );
}
