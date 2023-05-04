// // import { useEffect, useState } from "react";
// // import { Link, useParams } from "react-router-dom";

// // function MovieDetailsPage() {
// //   const [movie, setMovie] = useState(null);
// //   const { movieSlug } = useParams();

// //   useEffect(() => {
// //     const fetchMovie = async () => {
// //       const response = await fetch(
// //         `https://wookie.codesubmit.io/movies/by_slug/${movieSlug}`,
// //         {
// //           headers: {
// //             Authorization: "Bearer Wookie2019",
// //           },
// //         }
// //       );
// //       const data = await response.json();
// //       setMovie(data);
// //     };
// //     fetchMovie();
// //   }, [movieSlug]);

// //   if (!movie) {
// //     return <div>Loading...</div>;
// //   }

// //   return (
// //     <div>
// //       <Link to="/movies">Back to Movies List</Link>
// //       <h1>{movie.title}</h1>
// //       <img src={movie.poster} alt={movie.title} />
// //       <p>{movie.genres.join(", ")}</p>
// //       <p>{movie.release_date}</p>
// //       <p>{movie.overview}</p>
// //     </div>
// //   );
// // }

// // export default MovieDetailsPage;

// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

// function MovieDetailsPage() {
//   const [movie, setMovie] = useState(null);
//   const { slug } = useParams();

//   useEffect(() => {
//     const fetchMovie = async () => {
//       const response = await fetch(
//         `https://wookie.codesubmit.io/movies/${slug}`,
//         {
//           headers: {
//             Authorization: "Bearer Wookie2019",
//           },
//         }
//       );
//       const data = await response.json();
//       setMovie(data);
//     };
//     fetchMovie();
//   }, [slug]);

//   if (!movie) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <h1>{movie.title}</h1>
//       <img src={movie.backdrop} alt={movie.title} />
//       <p>{movie.plot}</p>
//       <p>Directed by: {movie.director}</p>
//       <p>Starring: {movie.cast.join(", ")}</p>
//       <p>Genres: {movie.genres.join(", ")}</p>
//     </div>
//   );
// }

// export default MovieDetailsPage;

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
