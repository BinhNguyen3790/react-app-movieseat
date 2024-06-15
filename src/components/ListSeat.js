import React, { Component } from "react";

class ListSeat extends Component {
  renderSeat = () => {
    return this.props.seat.danhSachGhe.map((seat, index) => {
      let cssSeat = "";
      let disable = false;
      if (seat.daDat) {
        cssSeat = "gheDuocChon";
        disable = true;
      }
      return (
        <button disabled={disable} className={`ghe ${cssSeat}`} key={index}>
          {seat.soGhe}
        </button>
      );
    });
  };

  renderSeatNumber = () => {
    return this.props.seat.danhSachGhe.map((number, index) => {
      return (
        <span className="rowNumber" key={index}>
          {number.soGhe}
        </span>
      );
    });
  };

  renderRowSeat = () => {
    if (this.props.firstSeat === 0) {
      return (
        <div>
          <h2>{this.props.seat.hang}</h2>
          <div>{this.renderSeatNumber()}</div>
        </div>
      );
    } else {
      return (
        <div>
          <h2>{this.props.seat.hang}</h2>
          <div>{this.renderSeat()}</div>
        </div>
      );
    }
  };

  render() {
    return <div>{this.renderRowSeat()}</div>;
  }
}

export default ListSeat;
