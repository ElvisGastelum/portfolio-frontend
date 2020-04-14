import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import {AppContext} from '../../app-context';
import { Article } from "../../pages";

export default class BlogContainer extends Component {
  static contextType = AppContext;

  render() {
    const { articles } = this.context;
    console.log(articles)
    return (
      <Switch>
        <Route
          path="/blog/:id"
          render={({ match }) => {
            const article = articles.find((t) => {
              console.log(t)
              return t.id === parseInt(match.params.id);
            });
            return <Article article={article} />;
          }}
        />
        
      </Switch>
    );
  }
}
