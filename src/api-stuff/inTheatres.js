import React from "react";
// import { BrowserRouter, Switch, Route } from "react-router-dom";
import axios from "axios";
import "../styles/main.scss";
import moment from "moment";
// import { apiKey } from "../secrets";

const twoWeeksAgo = moment().subtract(14, "days");

class InTheatres extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      theatres: []
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
        this.setState({
          theatres: response.data.results
        });
        return response.data;
      })
      .then(response => this.props.imagesInTheatres(response.results));
  }

  // renderInTheatres = () => {
  //   return this.state.theatres.map(theatre => {
  //     // console.log(movie);
  //     return (
  //       <Movie
  //         key={theatre.id}
  //         rating={theatre.vote_average}
  //         movie={theatre}
  //         image={theatre.poster_path}
  //         title={theatre.original_title}
  //         id={theatre.id}
  //         overview={theatre.overview}
  //         // inTheatrePosters={this.state.inTheatrePosters}
  //       />
  //     );
  //   });
  // };

  render() {
    // console.log(twoWeeksAgo.format().slice(0, 10));
    return <div className="App"></div>;
  }
}

export default InTheatres;
