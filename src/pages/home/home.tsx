import React, { RefObject } from 'react'
import { About } from '../../components/about'
import { Contact } from '../../components/contact'
import { Header } from '../../components/header'
import { Nav } from '../../components/nav'

type onSetSidebarOpenType = (open: boolean) => void;

interface HomeProps {
  header?: RefObject<HTMLElement>;
  nav?: RefObject<HTMLElement>;
  onSetSidebarOpen: onSetSidebarOpenType;
}

export const Home: React.FC<HomeProps> = ({ nav, header, onSetSidebarOpen}) => {
  return (
    <>
      <Nav navRef={nav} onSetSidebarOpen={onSetSidebarOpen} />
        <Header headerRef={header} />
        <About />
        <Contact />
    </>
  )
}
