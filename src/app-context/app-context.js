import React, { Component, createContext } from "react";

export const AppContext = createContext({});

export const AppContextConsumer = AppContext.Consumer;

export class AppContextProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      theme: 'dark',
    };
  }

  render() {
    const { children } = this.props;
    const { theme } = this.state;
    return (
      <AppContext.Provider value={{theme}}>{children}</AppContext.Provider>
    );
  }
}
