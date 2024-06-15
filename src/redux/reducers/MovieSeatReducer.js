import { REMOVE_SEAT, SET_SEAT } from "../types/MovieSeatType";

const initialState = {
  listSeat: [],
};

const MovieSeat = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEAT:
      {
        let listSeatUpdate = [...state.listSeat];
        let index = listSeatUpdate.findIndex((setSeat) => setSeat.soGhe === action.seat.soGhe);
        if (index !== -1) {
          listSeatUpdate.splice(index, 1);
        } else {
          listSeatUpdate.push(action.seat);
        }
        state.listSeat = listSeatUpdate;
        return { ...state };
      }
      break;
    case REMOVE_SEAT:
      {
        let listSeatUpdate = [...state.listSeat];
        let index = listSeatUpdate.findIndex((removeSeat) => removeSeat.soGhe === action.numSeat);
        if (index !== -1) {
          listSeatUpdate.splice(index, 1);
        }
        state.listSeat = listSeatUpdate;
        return { ...state };
      }
      break;
    default:
      return { ...state };
  }
};

export default MovieSeat;
