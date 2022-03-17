export const normalizeMiddleware =
  ({ dispatch }) =>
  (next) =>
  (action) => {
    const { payload } = action;
    if (!payload || !payload.normalizeData) return next(action);

    const data = payload.result;
    const { setter, normalize } = payload.normalizeData;
    dispatch(setter(normalize(data)));
    next(action);
  };
