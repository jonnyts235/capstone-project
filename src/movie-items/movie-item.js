import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { apiKey } from "../secrets";

export default class MovieItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      genres: []
    };
  }

  componentDidMount() {
    axios
      .get(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`
      )
      .then(response => {
        // console.log(response.data.genres);
        this.setState({
          genres: response.data.genres
        });
      });
  }

  renderGenres = () => {
    return this.props.movie.genre_ids.map(genre => {
      // console.log(genre);

      for (let i = 0; i < this.state.genres.length; i++) {
        if (genre === this.state.genres[i].id) {
          return (
            <div>
              <h4 className="one-genre">{this.state.genres[i].name}</h4>
            </div>
          );
        }
      }
    });
  };

  render() {
    // const { id, title, genres, poster_path } = this.props.movie;
    const { id, title, poster_path } = this.props.movie;

    return (
      <div className="movie">
        {/* {this.state.genres.length > 0 ? console.log(this.state.genres) : null} */}
        <Link to={`/movie/${id}`} className="movie-details">
          <div className="top-level">
            <img
              src={`https://image.tmdb.org/t/p/w500${poster_path}`}
              alt="poster"
            ></img>
          </div>
          <div className="content">
            <h3>{title}</h3>
            <h5 className="genres">{this.renderGenres()}</h5>
            <h4 className="rating">Rating: {this.props.rating}/10</h4>
            <h4 className="movie-item-overview">{this.props.overview}</h4>
          </div>
        </Link>
      </div>
    );
  }
}
