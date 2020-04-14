import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class ArticleResumed extends Component {
  render() {
    const { title, description, urlToImage, author, id } = this.props.article;
    return (
      <div className="card bg-dark mt-3" {...this.props}>
        <Link
          to={`/article/${id}`}
          href="#/blog"
          className="text-reset text-decoration-none d-flex flex-row justify-content-center card-body font-weight-light"
        >
          <img src={urlToImage} alt="" className="w-50" />
          <div className="p-4 d-flex flex-column align-content-center">
            <h3 className="card-title">{title}</h3>
            <p className="card-text text-justify">{description}</p>
            <p className="align-self-end">
              Author: {author ? author : "Anonymous"}
            </p>
          </div>
        </Link>
      </div>
    );
  }
}
