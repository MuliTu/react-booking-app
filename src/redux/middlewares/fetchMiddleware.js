import { ACTION_TYPES } from "../../utils/constans";

const MAIN_URL = "https://interview-booking-api.herokuapp.com/api/";

export const fetchMiddleware =
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    if (!action) return;
    try {
      if (action.type !== ACTION_TYPES.API) return next(action);
      const { endpoint, success } = action.payload;
      const respones = await fetchData(`${MAIN_URL}${endpoint}`);
      const result = await respones;
      dispatch(success(result));
      next({ ...action, payload: { ...action.payload, result } });
    } catch (e) {
      console.log(e);
      next(action);
    }
  };

const fetchData = async (url) => {
  return await fetch(url, { method: "GET" }).then((r) => r.json());
};
