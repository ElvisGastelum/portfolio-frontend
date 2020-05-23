import React, { Component, RefObject } from "react";
import Sidebar from "react-sidebar";

import { navScrollChange } from "../nav-scroll-change";

import { Nav } from "../components/nav";
import { Header } from "../components/header";
import { About } from "../components/about";
import { Contact } from "../components/contact";
import { Footer } from "../components/footer";
import { AppSidebar, SidebarPartialStyles } from "../components/app-sidebar";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

interface AppState {
  sidebarOpen: boolean;
}

export class App extends Component<{}, AppState> {
  private nav: RefObject<HTMLElement>;
  private header: RefObject<HTMLElement>;

  constructor(props: Readonly<{}>) {
    super(props);

    this.state = {
      sidebarOpen: false,
    };

    this.nav = React.createRef();
    this.header = React.createRef();
  }

  componentDidMount() {
    navScrollChange(this.nav.current, this.header.current, "transparent", {
      rootMargin: "-10% 0% 0% 0%",
    });
  }

  onSetSidebarOpen = (open: boolean): void => {
    this.setState({ sidebarOpen: open });
  };

  render() {
    return (
      <Sidebar
        sidebar={<AppSidebar />}
        open={this.state.sidebarOpen}
        onSetOpen={this.onSetSidebarOpen}
        styles={SidebarPartialStyles}
        pullRight={true}
        overlayClassName="sidebar-container"
      >
        <Nav navRef={this.nav} onSetSidebarOpen={this.onSetSidebarOpen} />
        <Header headerRef={this.header} />
        <About />
        <Contact />
        <Footer />
      </Sidebar>
    );
  }
}
