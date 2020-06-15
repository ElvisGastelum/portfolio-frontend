import React, { Component, RefObject } from "react";
import {
  withRouter,
  RouteComponentProps,
  Route,
  Switch,
} from "react-router-dom";
import Sidebar from "react-sidebar";

import { navScrollChange } from "../helpers/nav-scroll-change";

import { Nav } from "../components/nav";
import { Header } from "../components/header";
import { About } from "../components/about";
import { Contact } from "../components/contact";
import { Footer } from "../components/footer";
import { AppSidebar, SidebarPartialStyles } from "../components/app-sidebar";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import { Blog } from "../pages/blog";
import { Home } from "../pages/home";

interface AppState {
  sidebarOpen: boolean;
}

type onSetSidebarOpenType = (open: boolean) => void;

class App extends React.Component<RouteComponentProps, AppState> {
  private nav: RefObject<HTMLElement>;
  private header: RefObject<HTMLElement>;

  constructor(props: RouteComponentProps) {
    super(props);

    this.state = {
      sidebarOpen: false,
    };

    this.nav = React.createRef();
    this.header = React.createRef();
  }

  async componentDidMount() {
    navScrollChange(this.nav.current, this.header.current, "transparent", {
      rootMargin: "-10% 0% 0% 0%",
    });
  }

  onSetSidebarOpen: onSetSidebarOpenType = (open) => {
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
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return (
                <Home
                  nav={this.nav}
                  header={this.header}
                  onSetSidebarOpen={this.onSetSidebarOpen}
                />
              );
            }}
          />
          <Route exact path="/blog" component={Blog} />
        </Switch>

        <Footer />
      </Sidebar>
    );
  }
}

export default withRouter(App);
