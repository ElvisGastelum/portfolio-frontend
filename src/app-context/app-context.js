import React, { Component, createContext } from "react";
import lscache from "lscache";

import { getArticles } from "../services";

import { theme, country } from "./default-config.json";

export const AppContext = createContext({});

export const AppContextConsumer = AppContext.Consumer;

export class AppContextProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      theme,
      articles: [],
      country,
      isLoading: true,
    };
  }

  async componentDidMount() {
    if (lscache.get("articles") === null) {
      const articles = await getArticles({ country: this.state.country });
      lscache.set("articles", articles, 1);
    }

    this.setState({
      articles: lscache.get("articles"),
      isLoading: false,
    });
  }

  handleTheme = (theme) => this.setState({ theme });

  render() {
    const { children } = this.props;
    const { theme, articles, isLoading } = this.state;
    return (
      <AppContext.Provider
        value={{ theme, articles, isLoading, handleTheme: this.handleTheme }}
      >
        {children}
      </AppContext.Provider>
    );
  }
}
