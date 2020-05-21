import React, { Component, RefObject } from "react";

import { navScrollChange } from "../nav-scroll-change";

import { Nav } from "../components/nav";
import { Header } from "../components/header";
import { About } from "../components/about";
import { Contact } from "../components/contact";
import { Footer } from "../components/footer";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

interface AppState { }

export class App extends Component<{}, AppState> {
  private nav: RefObject<HTMLElement>;
  private header: RefObject<HTMLElement>;

  constructor(props: Readonly<{}>) {
    super(props);
    this.nav = React.createRef();
    this.header = React.createRef();
    
  }

  async componentDidMount() {
    navScrollChange(this.nav.current, this.header.current, "transparent", {
      rootMargin: "-10% 0% 0% 0%",
    });
  }

  render() {
    return (
      <>
        <Nav navRef={this.nav} />
        <Header headerRef={this.header} />
        <About />
        <Contact />
        <Footer />
      </>
    );
  }
}
