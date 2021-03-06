import { React, useState, useEffect } from "react";
import axios from "axios";
import Movie from "../components/Movie";
import "./Home.css";

function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating"
    );
    setMovies(movies);
    setIsLoading(false);
  };

  useEffect(() => {
    getMovies();
  });

  return (
    <section className="container">
      {isLoading ? (
        <div className="loader">
          <span className="loader_text">Loading.....</span>
        </div>
      ) : (
        <div className="movies">
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              title={movie.title}
              year={movie.year}
              poster={movie.medium_cover_image}
              summary={movie.summary}
              genres={movie.genres}
            />
          ))}
        </div>
      )}
    </section>
  );
}
// class Home extends React.Component {
//   state = {
//     isLoading: true,
//     movies: [],
//   };

//   getMovies = async () => {
//     const {
//       data: {
//         data: { movies },
//       },
//     } = await axios.get(
//       "https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating"
//     );
//     this.setState({ movies, isLoading: false });
//   };

//   componentDidMount() {
//     this.getMovies();
//   }
//   render() {
//     const { isLoading, movies } = this.state;
//     return (
//       <section className="container">
//         {isLoading ? (
//           <div className="loader">
//             <span className="loader_text">Loading...</span>
//           </div>
//         ) : (
//           <div className="movies">
//             {movies.map((movie) => (
//               <Movie
//                 key={movie.id}
//                 id={movie.id}
//                 title={movie.title}
//                 year={movie.year}
//                 poster={movie.medium_cover_image}
//                 summary={movie.summary}
//                 genres={movie.genres}
//               />
//             ))}
//           </div>
//         )}
//       </section>
//     );
//   }
// }

export default Home;
