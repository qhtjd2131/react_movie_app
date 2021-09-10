import React from "react";
import Movie_detail from "../components/Movie_detail";
import "./Detail.css";
import "../components/Movie_detail.js";

class Detail extends React.Component {
  componentDidMount() {
    console.log(this.props);
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
  }

  render() {
    const { location } = this.props;
    if (location.state) {
      return (
        <div className="test">
          <Movie_detail
            title={location.state.title}
            year={location.state.year}
            genres={location.state.genres}
            summary={location.state.summary}
            poster={location.state.poster}
          />
        </div>
      );
    } else {
      return null;
    }
  }
}
export default Detail;
