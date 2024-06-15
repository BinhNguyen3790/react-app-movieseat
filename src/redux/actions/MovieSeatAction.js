import { REMOVE_SEAT, SET_SEAT } from "../types/MovieSeatType";

export const setSeat = (seat) => {
  return {
    type: SET_SEAT,
    seat,
  };
};

export const removeSeat = (numSeat) => {
  return {
    type: REMOVE_SEAT,
    numSeat,
  };
};
