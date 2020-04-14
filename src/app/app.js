import React from "react";
import { Switch, Route } from "react-router-dom";
import { AppContextProvider } from "../app-context";

import { Projects, Contact, NotFound, Home, Blog, Article } from "../pages";
import NavigationBar from "../components/navigation-bar";

import GalleryImages from "../components/gallery-images";

export default function App() {
  return (
    <AppContextProvider>
      <div className="h-100 d-flex flex-column">
        <NavigationBar />
        <Switch>
          <Route exact path="/gallery" component={GalleryImages} />
          <Route exact path="/" component={Home} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/article/:hash" component={Article} />
          <Route render={NotFound} />
        </Switch>
      </div>
    </AppContextProvider>
  );
}
