import React from "react";
import "./Movie_detail.css";

function Movie_detail(props) {
  return (
    <div className="movie_detail">
      <img src={props.poster} alt={props.title} title={props.title} />
      <div className="movie_detail_content">
        <div className="movie_detail_title">{props.title}</div>
        <div className="movie_detail_year">{props.year}</div>
        <ul className="movie_detail_genres">
          {props.genres.map((genre, index) => (
            <li key={index} className="genres_genre">
              {genre}
            </li>
          ))}
        </ul>
        <div className="movie_detail_summary">{props.summary}</div>
      </div>
    </div>
  );
}

export default Movie_detail;
