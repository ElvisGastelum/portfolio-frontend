import React, { Component } from "react";

export default class ArticleDetails extends Component {
  render() {
    const { article } = this.props;
    const { description, urlToImage, content } = article;
    return (
      <div className="card bg-dark pt-3">
        <div className="card-title">
          <h2 className="text-center">{description}</h2>
        </div>
        <div className="card-body">
          <div className="card-text">
            <div className="pb-3">
              <img
                src={urlToImage}
                alt="Lorem Pic"
                className="img-thumbnail mx-auto d-block"
              />
            </div>
            {content}
          </div>
        </div>
      </div>
    );
  }
}
