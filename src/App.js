import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import MovieInTheatres from "./pages/movieInTheatres";
import Home from "./pages/home";
import Reviews from "./pages/reviews";
import Theatres from "./pages/theatres";
import Movie from "./movie-items/movie";

class App extends React.Component {
  render() {
    // console.log(this.state.profiles);
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/movie/:id" component={Movie} />
          <Route path="/movieInTheatre" component={MovieInTheatres} />
          <Route path="/inTheatres" component={Theatres} />
          <Route path="/reviews" component={Reviews} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
