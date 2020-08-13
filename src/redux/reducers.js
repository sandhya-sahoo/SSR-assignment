function apps(state = { isFetching: true, product: [] }, action) {
  switch (action.type) {
    case "GET-DATA":
      return {
        ...state,
        product: action.payload,
        isFetching: false,
      };

    case "GET-ALL-FILTER_ITEMS":
      return {
        ...state,
        product: action.payload,
        isFetching: false,
      };

    case "API-ERROR":
      return {
        message: action.message,
      };

    default:
      return state;
  }
}

export default apps;
