import React from "react";

import Logo from "../../components/home-logo";
import logo from "./img/github-logo.svg";

export default function Home(props) {
  
  return (
    <div className="justify-content-center d-flex flex-column flex-fill h-100 text-center">
      <Logo source={logo} link="https://github.com/ElvisGastelum" />
      <div>
        <h3>
          Elvis Gastelum - <code>Web developer</code>
        </h3>
        <br />
        <p>NodeJS, React, Docker, Linux, AWS, Terraform</p>
      </div>
    </div>
  );
}
