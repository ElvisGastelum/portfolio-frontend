import React from "react";

import styles from "./styles.module.css";

export const About = () => {
  return (
    <>
      <span id="about"></span>
      <section className={styles["about"]}>
        <div className={styles["about-text"]}>
          <h2 className={styles["about-text-title"]}>About</h2>
          <hr className={styles["about-text-line"]} />
          <p className={styles["about-text-content"]}>
            I can <b>create web pages</b> with the latest generation framework
            react, with which you can create <b>complete web applications</b>{" "}
            within a browser and not just static web pages, but at the same time
            i can <b>create a landing page</b> for local businesses
          </p>
        </div>
        <i className={styles["about-icon"] + " fas fa-address-card"}></i>
      </section>
    </>
  );
};
