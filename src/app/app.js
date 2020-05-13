import React from "react";

import Nav from "../components/nav";
import Header from "../components/header";
import About from "../components/about";
import Contact from '../components/contact';
import Footer from '../components/footer';

import "./app.css";

export default function App() {
  return (
    <>
      <Nav />
      <Header />
      <About />
      <Contact />
      <Footer />
    </>
  );
}
