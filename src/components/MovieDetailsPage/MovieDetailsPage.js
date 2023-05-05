import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import Navbar from "../Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import "./MovieDetailsPage.scss";

function MovieDetails() {
  const [movie, setMovie] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    const fetchMovie = async () => {
      const response = await fetch(
        `https://wookie.codesubmit.io/movies/${slug}`,
        {
          headers: {
            Authorization: "Bearer Wookie2019",
          },
        }
      );
      const data = await response.json();
      setMovie(data);
    };
    fetchMovie();
  }, [slug]);

  if (!movie) {
    return <div>Loading...</div>;
  }
  console.log("movie", movie);
  return (
    <div className="moviedetailswrapper">
      <Navbar />
      <div className="side">
        <span>Home / </span>
        <span>
          <button onClick={() => navigate("/movies")}> Movies /</button>
        </span>

        <span> {movie.title}</span>
      </div>
      <div className="moviedetails">
        <div>
          <img src={movie.poster} alt={movie.title} />
        </div>
        <div className="description">
          <h1>{movie.title}</h1>
          <div className="imdbcontainer">
            <p>
              <span className="imdb">IMDb</span> {movie.imdb_rating}
            </p>
            <p>{movie.length}</p>
          </div>

          <p>
            <span>{movie.overview}</span>
          </p>
          <div>
            <p>
              <span> Genre: </span>
              {movie.genres.join(", ")}
            </p>
            <p>
              <span>Release: </span>
              {movie.released_on.slice(0, 4)}
            </p>
          </div>

          <p>
            <span> Stars: </span>
            {movie.cast.join(", ")}
          </p>
          <p>
            <span> Director: </span>
            {/* {movie.director.join(", ")} */}
            {movie.director}
          </p>
          <p>
            <span>Country: </span> United States
          </p>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
