import React, { Component } from "react";
import { connect } from "react-redux";
import { setSeat } from "../redux/actions/MovieSeatAction";

class ListSeat extends Component {
  renderSeat = () => {
    return this.props.seat.danhSachGhe.map((seat, index) => {
      let cssSeat = "";
      let disable = false;
      if (seat.daDat) {
        cssSeat = "gheDuocChon";
        disable = true;
      }

      let cssSeatChose = "";
      let indexSeatChose = this.props.listSeat.findIndex((seatChose) => seatChose.soGhe === seat.soGhe);
      if (indexSeatChose !== -1) {
        cssSeatChose = "gheDangChon";
      }

      return (
        <button
          onClick={() => {
            this.props.setSeat(seat);
          }}
          disabled={disable}
          className={`ghe ${cssSeat} ${cssSeatChose}`}
          key={index}
        >
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
        <div className="d-flex mb-4 mt-3">
          <h2 className="w-15">{this.props.seat.hang}</h2>
          <div className="d-flex w-85">{this.renderSeatNumber()}</div>
        </div>
      );
    } else {
      return (
        <div className="d-flex">
          <h2 className="w-15">{this.props.seat.hang}</h2>
          <div className="d-flex w-85">{this.renderSeat()}</div>
        </div>
      );
    }
  };

  render() {
    return <div>{this.renderRowSeat()}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    listSeat: state.MovieSeat.listSeat,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setSeat: (seat) => {
      dispatch(setSeat(seat));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListSeat);
