import { REDUCERS } from "../../utils/constans";
const { GLOBAL_REDUCER } = REDUCERS;

const init = {
  hotel_report: {},
  employees: [],
  booking: [],
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = init, action) {
  const { payload, type } = action;
  switch (type) {
    case GLOBAL_REDUCER.SET_HOTEL_REPORT: {
      return { ...state, hotel_report: payload };
    }

    case GLOBAL_REDUCER.SET_EMPLOYEES: {
      return { ...state, employees: payload };
    }

    case GLOBAL_REDUCER.SET_BOOKINGS: {
      return { ...state, booking: payload };
    }

    default:
      return state;
  }
}
