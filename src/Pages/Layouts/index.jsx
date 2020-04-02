import React from 'react'
import { HashRouter } from 'react-router-dom';

import NavigationBar from '../../components/NavigationBar';
import Footer from '../../components/Footer';

const Layout = ({ children, className }) =>
  <HashRouter>
    <div className={className}>
      <NavigationBar />
        {children}
      <Footer />
    </div>
  </HashRouter>

export default Layout