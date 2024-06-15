import React, { Component } from "react";
import { connect } from "react-redux";
import { removeSeat } from "../redux/actions/MovieSeatAction";

class ResultSeat extends Component {
  render() {
    return (
      <div>
        <div className="d-flex flex-column">
          <div className="mb-2">
            <button className="gheDuocChon"></button> <span className="fs-4">Already chose</span>
          </div>
          <div className="mb-2">
            <button className="gheDangChon"></button> <span className="fs-4">you chose</span>
          </div>
          <div>
            <button className="ghe m-0"></button> <span className="fs-4">empty chose</span>
          </div>
        </div>
        <div className="table mt-5">
          <table className="table">
            <thead>
              <tr>
                <th>Number Seat</th>
                <th>Price</th>
                <th>Cancel</th>
              </tr>
            </thead>
            <tbody>
              {this.props.listSeat.map((seat, index) => {
                return (
                  <tr key={index}>
                    <td>{seat.soGhe}</td>
                    <td>{seat.gia.toLocaleString()}</td>
                    <td>
                      <button
                        onClick={() => {
                          this.props.removeSeat(seat.soGhe);
                        }}
                      >
                        Cancel6
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot>
              <tr>
                <td></td>
                <td>Sum Price:</td>
                <td>
                  {this.props.listSeat.reduce((sum, seat, index) => {
                    return (sum += seat.gia);
                  }, 0)}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    listSeat: state.MovieSeat.listSeat,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeSeat: (numSeat) => {
      dispatch(removeSeat(numSeat));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ResultSeat);
