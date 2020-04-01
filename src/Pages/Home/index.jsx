import React from 'react';

import Logo from './Logo/Logo';
import DescriptionWrapper from './DescriptionWrapper';
import Title from './DescriptionTitle';
import Text from './DescriptionText';

import logo from './img/github-logo.svg';

export default function Home() {
  return (
    <div className="justify-content-center d-flex flex-column flex-fill h-100 text-center">
      <Logo 
        source={logo}
        link="https://github.com/ElvisGastelum"
        
      />
      <DescriptionWrapper>
        <Title>
          Elvis Gastelum - <code>Web developer</code>
        </Title>
        <br />
        <Text>
          I can help you solve any problem
        </Text>
        <Text>
          NodeJS, React, C#
        </Text>
      </DescriptionWrapper>
    </div>
  )
}