import React from "react";
import PropTypes from "prop-types";

function Movie({ id, year, title, poster, summary }) {
  return <h5>{title}</h5>;
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
};

export default Movie;
