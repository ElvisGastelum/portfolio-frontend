import React from "react";

import Logo from "./Logo/Logo";
import logo from "./img/github-logo.svg";

export default function Home() {
  return (
    <div className="justify-content-center d-flex flex-column flex-fill h-100 text-center">
      <Logo source={logo} link="https://github.com/ElvisGastelum" />
      <div>
        <h3>
          Elvis Gastelum - <code>Web developer</code>
        </h3>
        <br />
        <p>I can help you solve any problem</p>
        <p>NodeJS, React, C#</p>
      </div>
    </div>
  );
}
