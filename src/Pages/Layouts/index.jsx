import React from 'react'
import { BrowserRouter } from 'react-router-dom';

import NavigationBar from '../../components/NavigationBar';
import Footer from '../../components/Footer';

const Layout = ({ children, className }) =>
  <BrowserRouter>
    <div className={className}>
      <NavigationBar />
        {children}
      <Footer />
    </div>
  </BrowserRouter>

export default Layout