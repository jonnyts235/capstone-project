import React from "react";
import { Gallery, GalleryImage } from "react-gesture-gallery";

import "../styles/main.scss";

function Carousel(props) {
  const [index, setIndex] = React.useState(0);

  // props.inTheatrePosters(this.props.theatres);

  React.useEffect(() => {
    const timer = setInterval(() => {
      if (index === 20 - 1) {
        setIndex(0);
      } else {
        setIndex(prev => prev + 1);
      }
    }, 4000);
    return () => clearInterval(timer);
  }, [index]);

  return (
    // <Link to={`/movie/${movie.id}`}>
    <div
      className="gallery"
      style={{
        marginBottom: "100px",
        marginTop: "25px",
        height: "100vh",
        width: "100vw",
        boxSizing: "border-box"
      }}
    >
      <Gallery
        index={index}
        onRequestChange={i => {
          setIndex(i);
        }}
      >
        {props.inTheatrePosters.map(movie => (
          <GalleryImage
            objectFit="contain"
            key={props.image}
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          />
        ))}
      </Gallery>
    </div>
  );
}

export default Carousel;
