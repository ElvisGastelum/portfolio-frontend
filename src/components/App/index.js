import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import NavigationBar from '../NavigationBar';
import Footer from '../Footer';
import { Projects, Contact, NotFound, Home } from '../Pages';

export default function App() {
  return (
    <BrowserRouter>
    <div className="h-100 d-flex flex-column">
      <NavigationBar />
      <Switch>
        <Route exact path='/portfolio/' component={Home} />
        <Route exact path='/portfolio/projects/' component={Projects} />
        <Route exact path='/portfolio/contact/' component={Contact} />
        <Route render={NotFound} />
      </Switch>
      <Footer />
    </div>
    </BrowserRouter>
  );
}