import React, { Component } from "react";
import { Articles } from "../../types";
import { getArticles } from "../../services";

interface BlogState {
  articles?: Articles;
  loaded: boolean;
}

export class Blog extends Component<{}, BlogState> {
  constructor(props: Readonly<{}>) {
    super(props);

    this.state = {
      articles: [],
      loaded: false,
    };
  }

  async componentDidMount() {
    try {
      const articles = await getArticles();
      this.setArticles(articles);
    } catch (error) {
      console.log(error);
    }
  }

  private setArticles(articles: Articles) {
    this.setState((prevState) => {
      return {
        ...prevState,
        articles,
        loaded: true,
      };
    });
  }

  render() {
    return <div></div>;
  }
}
