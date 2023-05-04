import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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
      <h1>Movies List Page</h1>
      <div>
        {genres.map((genre) => (
          <button key={genre} onClick={() => handleGenreClick(genre)}>
            {genre}
          </button>
        ))}
        <button onClick={() => setSelectedGenre(null)}>All Genres</button>
      </div>
      <div>
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchTermChange}
          placeholder="Search by title"
        />
      </div>
      <div className="movies">
        {filteredMovies.map((movie) => (
          <div key={movie.slug}>
            <Link to={`/movies/${movie.slug}`}>
              <img src={movie.poster} alt={movie.title} />
              <h2>{movie.title}</h2>
              <p>{movie.genres.join(", ")}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MoviesList;
