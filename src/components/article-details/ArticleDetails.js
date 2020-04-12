import React, { Component } from "react";

export default class ArticleDetails extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { children, subtitle } = this.props;
    return (
      <div className="card bg-dark pt-3">
        <div className="card-title">
          <h2 className="text-center">{subtitle}</h2>
        </div>
        <div className="card-body">
          <div className="card-text">{children}</div>
        </div>
      </div>
    );
  }
}
