import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";

export default class Reviews extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      movie: "",
      comment: "",
      rating: 0,
      reviews: []
    };
  }

  componentDidMount() {
    axios
      .get("https://jts-capstone-api.herokuapp.com/reviews")
      .then(response => {
        this.setState({
          reviews: response.data
        });
      });
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleDeleteClick(id) {
    axios
      .delete(`https://jts-capstone-api.herokuapp.com/review/${id}`)
      .then(response => {
        this.setState({
          reviews: this.state.reviews.filter(review => {
            return review.id !== id;
          })
        });

        return response.data;
      })
      .catch(error => {
        console.log("delete review error", error);
      });
  }

  handleSubmit = event => {
    axios
      .post("https://jts-capstone-api.herokuapp.com/review", {
        name: this.state.name,
        comment: this.state.comment,
        rating: this.state.rating,
        movie: this.state.movie
      })
      .then(response => {
        console.log(response);
        this.setState({
          name: "",
          comment: "",
          rating: 0,
          movie: ""
        });
      })
      .catch(error => {
        console.log("review form handleSubmit error", error);
      });

    event.preventDefault();
  };

  renderReviews = () => {
    return this.state.reviews.map(review => {
      return (
        <div className="review-card">
          <h2 className="name">{review.name}</h2>
          <h3 className="movie">{review.movie}</h3>
          <h4 className="rating">Rating: {review.rating}</h4>
          <h3 className="comment">{review.comment}</h3>
          <button
            id="delete-btn"
            onClick={() => this.handleDeleteClick(review.id)}
          >
            delete
          </button>
        </div>
      );
    });
  };

  toggle = () => {
    console.log("clicked");
    this.setState({
      on: !this.state.on
    });
  };

  handleToTop = () => {
    window.scrollTo(0, 0);
  };

  render() {
    return (
      <div className="reviews-page">
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
        <div className="review-form">
          <form onSubmit={this.handleSubmit} className="form-wrapper">
            <div className="form-flex">
              <div className="form-name">
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Name"
                  value={this.state.name}
                  onChange={this.handleChange}
                />
              </div>
              <div className="two-column">
                <input
                  type="text"
                  name="movie"
                  required
                  placeholder="Movie"
                  value={this.state.movie}
                  onChange={this.handleChange}
                />

                <select
                  name="rating"
                  value={this.state.rating}
                  onChange={this.handleChange}
                  required
                  className="select-element"
                >
                  <option value="Rating">Rating</option>
                  <option value="1">1 Stars</option>
                  <option value="2">2 Stars</option>
                  <option value="3">3 Stars</option>
                  <option value="4">4 Stars</option>
                  <option value="5">5 Stars</option>
                  <option value="6">6 Stars</option>
                  <option value="7">7 Stars</option>
                  <option value="8">8 Stars</option>
                  <option value="9">9 Stars</option>
                  <option value="10">10 Stars</option>
                </select>
              </div>
              <div className="one-column">
                <textarea
                  type="text"
                  name="comment"
                  placeholder="Comment"
                  value={this.state.comment}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="submit-btn">
              <button className="btn" type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="render-profiles">{this.renderReviews()}</div>
        <button id="review-scroll-btn" onClick={this.handleToTop}>
          Back To Top
        </button>
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
