import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function MovieDetails() {
  const [movie, setMovie] = useState(null);
  const { slug } = useParams();

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

  return (
    <div>
      <h1>{movie.title}</h1>
      <img src={movie.poster} alt={movie.title} />
      <p>{movie.description}</p>
      <p>Genres: {movie.genres.join(", ")}</p>
    </div>
  );
}

export default MovieDetails;
