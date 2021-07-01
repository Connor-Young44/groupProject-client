const initialState = [];

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "movies/fetchSuccess":
      return [...action.payload];
    case "remove/watchList":
      return initialState;
    default:
      return state;
  }
}
