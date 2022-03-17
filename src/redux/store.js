import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { appReducers } from "./index";
import { fetchMiddleware } from "./middlewares/fetchMiddleware";
import { normalizeMiddleware } from "./middlewares/normalizeMiddleware";
const middlewares = [thunk, fetchMiddleware, normalizeMiddleware];

export default createStore(
  appReducers,
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(
        applyMiddleware(...middlewares)
      )
    : applyMiddleware(...middlewares)
);
