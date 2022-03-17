import { ACTION_TYPES, REDUCERS } from "../../utils/constans";
import { extractEmployees } from "../utils/normalize";

const { GLOBAL_REDUCER } = REDUCERS;

export const getHotelsReport = () => (dispatch) => {
  dispatch(fetchHotelReport());
};

const fetchHotelReport = () => ({
  type: ACTION_TYPES.API,
  payload: {
    endpoint: "booking-snapshot",
    success: setHotelReport,
  },
});

const setHotelReport = (payload) => {
  return {
    type: GLOBAL_REDUCER.SET_HOTEL_REPORT,
    payload,
  };
};

export const getBooking = () => (dispatch) => {
  dispatch(fetchBooking());
};

const fetchBooking = () => ({
  type: ACTION_TYPES.API,
  payload: {
    endpoint: "bookings",
    success: setBooking,
    normalizeData: {
      normalize: extractEmployees,
      setter: setEmployees,
    },
  },
});

const setEmployees = (payload) => {
  return {
    type: GLOBAL_REDUCER.SET_EMPLOYEES,
    payload,
  };
};

const setBooking = (payload) => ({
  type: GLOBAL_REDUCER.SET_BOOKINGS,
  payload,
});
