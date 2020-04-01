import React, { Component } from "react";

import "./styles.css";

const API =
  "https://pixabay.com/api/?key=15834767-e0333fd2846cb4e6218951e0a&per_page=8&q=";

export default class GalleryImages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      text: "hola"
    };
  }

  fetchImages = () => {
    const URL = API + this.state.text.split(" ").join("+");

    fetch(URL)
      .then(response => response.json())
      .then(data => this.setState({ images: data.hits }));
  };

  componentDidMount() {
    this.fetchImages();
  }

  handleSearch = e => {
    e.preventDefault();
    this.fetchImages();
  };

  handleTextChange = e => {
    this.setState({
      text: e.target.value
    });
  };

  render() {
    return (
      <div className="h-100 d-flex flex-column">
        <div className="mx-auto p-4">
          <form onSubmit={this.handleSearch}>
            <input
              type="text"
              placeholder="Search"
              onChange={this.handleTextChange}
              autoFocus
            />
            <button>Search</button>
          </form>
        </div>
        <div className="text-center p-4">
          {this.state.images.map(image => (
            <a key={image.id} href={image.pageURL}>
              <img
                src={image.largeImageURL}
                alt={`images ${image.id}`}
                className="img-thumbnail image m-4"
              />
            </a>
          ))}
        </div>
      </div>
    );
  }
}
