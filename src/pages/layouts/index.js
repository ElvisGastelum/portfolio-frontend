import React from 'react'
import { HashRouter } from 'react-router-dom';

import NavigationBar from '../../components/navigation-bar';
import Footer from '../../components/footer';

const Layout = ({ children, className }) =>
  <HashRouter>
    <div className={className}>
      <NavigationBar />
        {children}
      <Footer />
    </div>
  </HashRouter>

export default Layout