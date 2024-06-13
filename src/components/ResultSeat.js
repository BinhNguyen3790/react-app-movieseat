import React, { Component } from "react";

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
              <tr>
                <td>1</td>
                <td>45.000</td>
                <td></td>
              </tr>
              <tr>
                <td>1</td>
                <td>45.000</td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ResultSeat;
