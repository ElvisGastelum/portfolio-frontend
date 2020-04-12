import React, { Component } from "react";

import { getArticles } from "../../services";

import ArticleResumed from "../../components/article-resumed";
import Loading from '../../components/loading';

export default class Blog extends Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: [],
      isLoading: true,
    };
  }

  componentDidMount() {
    const getArticlesList = async () => {
      const articles = await getArticles({ country: "us" });
      this.setState({
        articles,
        isLoading: false,
      });
    };
    getArticlesList();
  }

  render() {
    const { articles, isLoading } = this.state;
    return (
      <div className="container">
        <div className="row justify-content-center card bg-dark mt-3">
          <div className="col title text-center">
            <h1>Blog</h1>
          </div>
        </div>
        <main className="h-100">
          {isLoading ? (
            <Loading />
          ) : (
            articles.map((article, index) => (
              <ArticleResumed key={index} article={article} />
            ))
          )}
        </main>
      </div>
    );
  }
}
