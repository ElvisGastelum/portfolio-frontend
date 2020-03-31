import React from 'react'
import { BrowserRouter } from 'react-router-dom';

import NavigationBar from './NavigationBar';
import Footer from './Footer';

const LayoutWrapper = ({ children, className }) =>
  <BrowserRouter>
    <div className={className}>
      {children}
    </div>
  </BrowserRouter>


const Layout = ({ children, className }) =>
  <LayoutWrapper className={className}>
    <NavigationBar />
    {children}
    <Footer />
  </LayoutWrapper>


export default Layout