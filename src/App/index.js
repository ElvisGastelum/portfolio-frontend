import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Projects, Contact, NotFound, Home, Layout, Blog } from '../Pages';

import GalleryImages from '../components/GalleryImages';


export default function App() {
  return (
    <Layout className="h-100 d-flex flex-column">
      <Switch>
        <Route exact path='/gallery' component={GalleryImages} />
        <Route exact path='/portfolio/' component={Home} />
        <Route exact path='/portfolio/projects/' component={Projects} />
        <Route exact path='/portfolio/blog/' component={Blog} />
        <Route exact path='/portfolio/contact/' component={Contact} />
        <Route render={NotFound} />
      </Switch>
    </Layout>
  );
}