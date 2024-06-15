import React, { Component, Fragment } from "react";
import "../assets/css/MovieSeat.css";
import ResultSeat from "./ResultSeat";
import ListSeat from "./ListSeat";
import rowSeats from "../data/danhSachGhe.json";
class MovieSeat extends Component {
  renderSeat = () => {
    return rowSeats.map((seat, index) => {
      return (
        <Fragment key={index}>
          <ListSeat seat={seat} firstSeat={index} />
        </Fragment>
      );
    });
  };

  render() {
    return (
      <div className="bookingMovie">
        <div className="outline container-fluid pt-5">
          <h1 className="text-center text-warning display-4 mb-5">Movie Seat Selection</h1>
          <div className="row">
            <div className="col-8">
              <div className="d-flex align-items-center flex-column">
                <h2 className="text-center">Screen</h2>
                <div className="screen"></div>
                {this.renderSeat()}
              </div>
            </div>
            <div className="col-4">
              <h2 className="text-center">Info</h2>
              <ResultSeat />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieSeat;
