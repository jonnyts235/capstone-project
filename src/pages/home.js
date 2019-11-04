import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../styles/main.scss";
import MovieItem from "../movie-items/movie-item";
import ApiInTheatres from "../api-stuff/inTheatres";
import Carousel from "../carousel/carousel";
import logo from "../images/logo.png";
import { apiKey } from "../secrets";

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
      inTheatrePosters: [],
      on: false
    };
  }

  imagesInTheatres = data => {
    this.setState({
      inTheatrePosters: data
    });
  };

  componentDidMount() {
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`
      )
      .then(response => {
        this.setState({
          movies: response.data.results
        });
      });
  }

  toggle = () => {
    console.log("clicked");
    this.setState({
      on: !this.state.on
    });
  };

  renderPopular = () => {
    return this.state.movies.map(movie => {
      // console.log(movie);
      return (
        <MovieItem
          key={movie.id}
          rating={movie.vote_average}
          movie={movie}
          image={movie.poster_path}
          title={movie.original_title}
          id={movie.id}
          overview={movie.overview}
        />
      );
    });
  };

  handleToTop = () => {
    window.scrollTo(0, 0);
  };

  // handleChange = event => {
  //   this.setState({ movie: event.target.value });
  // };

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
          <div className="movie-space-header">
            <h1>Movies In Theatres</h1>
          </div>
          <Carousel inTheatrePosters={this.state.inTheatrePosters} />
          <ApiInTheatres imagesInTheatres={this.imagesInTheatres} />
          <div className="items-wrapper">
            <div className="popular-movies-header">
              <h1>Popular Movies Right Now</h1>
            </div>
            {this.renderPopular()}
          </div>
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

export default Home;
