import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
// import Iframe from "react-iframe";

export default class Theatres extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movie: {}
    };
  }

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
        <div className="theatre-map-space">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d776877.9346982739!2d-112.38545532590724!3d40.48235642741587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1stheatres!5e0!3m2!1sen!2sus!4v1572897155597!5m2!1sen!2sus"
            width="100%"
            title="unique"
            height="700vh"
            frameborder="0"
            style={{ border: "0" }}
            allowfullscreen=""
          ></iframe>
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
