import React from "react";

import styles from "./styles.module.css";

interface IAboutText {
  textTitle: string;
  textContent: string;
}

const AboutTextEnglish: IAboutText = {
  textTitle: 'About',
  textContent: `
    I can <b>create web pages</b> with the latest generation framework react,
    with which you can create <b>complete web applications</b> within a browser
    and not just static web pages, but at the same time i can <b>create a
    landing page</b> for local businesses
  `,
};

const AboutTextSpanish: IAboutText = {
  textTitle: 'Acerca de',
  textContent: `
    Puedo <b>crear paginas web</b> con el framework de ultima generacion react,
    con el que puedes crear <b>aplicaciones web completas</b> en el navegador
    y no solo paginas web estaticas, pero al mismo tiempo puedo <b>crear paginas
    de aterrizaje</b> para negocios locales.
  `,
};

const AboutText = AboutTextEnglish;

export const About = () => {
  return (
    <>
      <span id="about"></span>
      <section className={styles["about"]}>
        <div className={styles["about-text"]}>
          <h2 className={styles["about-text-title"]}>{AboutText.textTitle}</h2>
          <hr className={styles["about-text-line"]} />
          <p className={styles["about-text-content"]} dangerouslySetInnerHTML={{ __html: AboutText.textContent}} ></p>
        </div>
        <i className={styles["about-icon"] + " fas fa-address-card"}></i>
      </section>
    </>
  );
};
