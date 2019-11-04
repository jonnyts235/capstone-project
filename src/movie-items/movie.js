import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
// import { apiKey } from "../secrets";
import logo from "../images/logo.png";
import Iframe from "react-iframe";

export default class Movie extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movie: {},
      display: false
    };
  }

  componentDidMount() {
    axios(
      `https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=${apiKey}&language=en-US`
    ).then(response => {
      console.log(response.data);
      this.setState({
        movie: response.data,
        display: true
      });
    });
  }

  handleToTop = () => {
    window.scrollTo(0, 0);
  };

  renderGenres = () => {
    return this.state.movie.genres.map(genre => {
      return <h5 className="one-genre">{genre.name}</h5>;
    });
  };

  toggle = () => {
    console.log("clicked");
    this.setState({
      on: !this.state.on
    });
  };

  render() {
    const {
      title,
      poster_path,
      vote_average,
      genres,
      overview,
      runtime,
      homepage
    } = this.state.movie;

    return (
      <div className="movie-component">
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
        <div className="overall-about-movie">
          <div className="movie-pic">
            <div className="movie-left-side">
              <img
                src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                alt="poster"
              ></img>
            </div>
            <div className="movie-right-side">
              <div className="movie-content">
                <h1 className="movie-title">{title}</h1>
                <div className="movie-genres">
                  {genres && this.renderGenres()}
                </div>
                <h6>{runtime} mins</h6>
                <h6 className="rating">Rating: {vote_average}</h6>
                <h4 className="movie-overview">{overview}</h4>
                <div className="iframe">
                  {homepage ? (
                    <Iframe
                      url={`${homepage}`}
                      width="70%"
                      height="250px"
                      id="myId"
                      className="myClassname"
                      display="initial"
                      position="relative"
                    />
                  ) : null}
                </div>
              </div>
            </div>
          </div>
          <div className="auto-scroll-btn">
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
