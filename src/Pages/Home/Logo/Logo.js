import React from 'react'

import { appLogo } from './Logo.module.css';

export default function Logo({ source, link }) {
  return (
    <div className={appLogo}>
      <a href={link}>
        <img src={source} alt="logo" />
      </a>
    </div>
  )
}
