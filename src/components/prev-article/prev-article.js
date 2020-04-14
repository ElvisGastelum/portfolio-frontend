import React, { Component } from "react";
import {Link} from 'react-router-dom';


export default class PrevArticle extends Component {
  render() {
    const { title, description, id } = this.props;
    return (
      <div className="h-100 card bg-dark m-2">
        <Link
          to={`/article/${id}`}
          href="#/blog"
          className="text-reset text-decoration-none d-flex flex-row justify-content-center card-body font-weight-light"
        >
          <div className="card-body">
            <div className="card-title">{title}</div>
            <div className="card-text">{description}</div>
          </div>
        </Link>
      </div>
    );
  }
}
