import React from 'react'
import { BrowserRouter } from 'react-router-dom';


import NavigationBar from './NavigationBar';
import Footer from './Footer';


export default function Layout({ children, className }) {
  return (
    <>
      <BrowserRouter>
        <div className={className}>
          <NavigationBar />
          {children}
          <Footer />
        </div>
      </BrowserRouter>
    </>
  )
}
