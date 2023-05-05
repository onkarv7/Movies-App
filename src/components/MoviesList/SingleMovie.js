import React from "react";
import { Link } from "react-router-dom";

const SingleMovie = ({ movie }) => {
  return (
    <>
      <Link to={`/movies/${movie.slug}`}>
        <img src={movie.poster} alt={movie.title} />
        <h2>{movie.title}</h2>
      </Link>
    </>
  );
};

export default SingleMovie;
