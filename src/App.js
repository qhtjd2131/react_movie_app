import React from "react";
import axios from "axios";
import Movie from "./Movie";
import "./App.css";
// https://yts-proxy.now.sh/list_movies.json
// api 링

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating"
    );
    this.setState({ movies, isLoading: false });
    console.log(movies);
  };

  componentDidMount() {
    this.getMovies();
  }
  render() {
    console.log("render");
    const { isLoading, movies } = this.state;
    return (
      <section class="container">
        {isLoading ? (
          <div class="loader">
            <span class="loader_text">Loading...</span>
          </div>
        ) : (
          <div class="movies">
            {movies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                title={movie.title}
                year={movie.year}
                poster={movie.medium_cover_image}
                summary={movie.summary}
              />
            ))}
          </div>
        )}
      </section>
    );
  }
}

export default App;
