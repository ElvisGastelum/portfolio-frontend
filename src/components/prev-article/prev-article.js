import React, { Component } from "react";

export default class PrevArticle extends Component {
  render() {
    const { title, description } = this.props;
    return (
      <div className="h-100 card bg-dark m-2">
        <div className="card-body">
          <div className="card-title">{title}</div>
          <div className="card-text">{description}</div>
        </div>
      </div>
    );
  }
}
