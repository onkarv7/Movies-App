import { useState, useEffect } from "react";
//custom components
import Navbar from "../Navbar/Navbar";
import SingleMovie from "./SingleMovie";
import "./MoviesList.scss";

function MoviesList() {
  const [movies, setMovies] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch("https://wookie.codesubmit.io/movies", {
        headers: {
          Authorization: "Bearer Wookie2019",
        },
      });
      const data = await response.json();
      setMovies(data.movies);
    };
    fetchMovies();
  }, []);

  const genres = [
    "Romance",
    "Action",
    "Adventure",
    "Sci-Fi",
    "Animation",
    "Biography",
    "Drama",
    "History",
    "Crime",
    "Family",
    "Thriller",
    "War",
  ];

  const handleGenreClick = (genre) => {
    setSelectedGenre(genre);
  };

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredMovies = movies.filter((movie) => {
    const titleMatch = movie.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const genreMatch = selectedGenre
      ? movie.genres.includes(selectedGenre)
      : true;
    return titleMatch && genreMatch;
  });

  return (
    <div>
      <Navbar />
      <div className="genre">
        {genres.map((genre) => (
          <button key={genre} onClick={() => handleGenreClick(genre)}>
            {genre}
          </button>
        ))}
        <button onClick={() => setSelectedGenre(null)}>All Movies</button>
      </div>
      <div></div>
      <div className="selectedGenre">{selectedGenre} Movies</div>
      <div className="movies">
        {filteredMovies.map((movie) => (
          <div className="card" key={movie.slug}>
            <SingleMovie movie={movie} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default MoviesList;
