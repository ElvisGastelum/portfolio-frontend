import React, { Component } from "react";

import { AppContext } from "../../app-context";

import ArticleResumed from "../../components/article-resumed";
import Loading from "../../components/loading";

export default class Blog extends Component {
  static contextType = AppContext;

  render() {
    const { articles, isLoading } = this.context;
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
            articles.map((article) => (
              <ArticleResumed key={article.id} article={article} />
            ))
          )}
        </main>
      </div>
    );
  }
}
