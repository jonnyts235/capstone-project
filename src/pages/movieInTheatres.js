import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { apiKey } from "../secrets";
import logo from "../images/logo.png";

import moment from "moment";

const twoWeeksAgo = moment().subtract(14, "days");

export default class MovieInTheatres extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
      on: false
    };
  }

  componentDidMount() {
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&primary_release_date.gte=2014-09-15&primary_release_date.lte=${twoWeeksAgo
          .format()
          .slice(0, 10)}`
      )
      .then(response => {
        console.log(response.data.results);
        this.setState({
          movies: response.data.results
          // genres: response.data.genres
        });
      });
  }

  renderMovies = () => {
    return this.state.movies.map(movie => {
      return (
        <div className="movie">
          <Link to={`/movie/${movie.id}`} className="movie-details">
            <div className="top-level">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt="poster"
              ></img>
            </div>
            <div className="content">
              <h3>{movie.title}</h3>
              {/* <h5 className="genres">{this.renderGenres()}</h5> */}
              <h4 className="rating">Rating: {movie.vote_average}/10</h4>
              <h4 className="movie-item-overview">{movie.overview}</h4>
            </div>
          </Link>
        </div>
      );
    });
  };

  handleToTop = () => {
    window.scrollTo(0, 0);
  };

  toggle = () => {
    console.log("clicked");
    this.setState({
      on: !this.state.on
    });
  };

  render() {
    return (
      <div className="homepage">
        <div className="top-navbar">
          <div className="left-side">
            <Link to="/" className="logo-text">
              <div className="logo">
                <img src={logo} alt="logo" />
              </div>
              <h3>FavoriteFilm</h3>
            </Link>
          </div>

          <div className="right-side">
            <div
              className="topnav-buttons-small"
              style={this.state.on ? { display: "block" } : { display: "none" }}
            >
              <Link to="/">
                <button className="top-nav-btns">Home</button>
              </Link>
              <Link to="/movieInTheatre">
                <button className="top-nav-btns">In Theatres</button>
              </Link>
              <Link to="/inTheatres">
                <button className="top-nav-btns">Theatres</button>
              </Link>

              <Link to="/reviews">
                <button className="top-nav-btns">Reviews</button>
              </Link>
            </div>

            <div className="topnav-buttons">
              <Link to="/">
                <button className="top-nav-btns">Home</button>
              </Link>
              <Link to="/movieInTheatre">
                <button className="top-nav-btns">In Theatres</button>
              </Link>
              <Link to="/inTheatres">
                <button className="top-nav-btns">Theatres</button>
              </Link>

              <Link to="/reviews">
                <button className="top-nav-btns">Reviews</button>
              </Link>
            </div>
            <div className="burger" onClick={this.toggle}>
              <div className="line1"></div>
              <div className="line2"></div>
              <div className="line3"></div>
            </div>
          </div>
        </div>
        <div className="movie-space">
          <h1 className="inTheatre-header">Movies That Are In Theatres</h1>
          {this.renderMovies()}
          <div className="scroll-btn-space">
            <button id="scroll-btn" onClick={this.handleToTop}>
              Back To Top
            </button>
          </div>
        </div>
        <div className="bottom-navbar">
          <div className="bottomnav-buttons">
            <Link to="/movieInTheatre">
              <button className="top-nav-btns">In Theatres</button>
            </Link>
            <Link to="/inTheatres">
              <button className="top-nav-btns">Theatres</button>
            </Link>

            <Link to="/reviews">
              <button className="top-nav-btns">Reviews</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
