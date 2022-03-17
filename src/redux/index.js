import { combineReducers } from "redux";
import globalReducer from "./globalReducer/reducer";

import * as globalSelectors from "./globalReducer/selectors";

export const appReducers = combineReducers({
  globalReducer,
});

export const _getHotelsReport = (state) =>
  globalSelectors.getHotelsReport(state.globalReducer);

export const _getBooking = (state) =>
  globalSelectors.getBooking(state.globalReducer);

export const _getEmployees = (state) =>
  globalSelectors.getEmployees(state.globalReducer);
