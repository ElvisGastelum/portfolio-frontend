import React from "react";

import styles from './styles.module.css';

export default function Contact() {
  return (
    <>
    <span id="contact"></span>
    <section className={styles["contact"]}>
      <i className={styles["contact-icon"] + " fas fa-address-book"}></i>
      <div className={styles["contact-text"]}>
        <h3 className={styles["contact-text-title"]}>Contact</h3>
        <hr className={styles["contact-text-line"]} />
        <p className={styles["contact-text-content"]}>
          LinkedIn: <a href="https://www.linkedin.com/in/elvis-gastelum/">ElvisGastelum</a> <br />
          E-Mail: <a href="mailto:elvisgastelum@outlook.com">elvisgastelum@outlook.com</a> <br />
          Number Phone: <a href="tel:+52638-117-7267"> +52 638 117 72 67 </a> <br />
        </p>
      </div>
    </section>
    </>
  );
}
