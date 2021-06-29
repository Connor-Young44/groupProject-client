const initialState = {
  message: "empty",
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "movies/fetchSuccess":
      return { ...action.payload };
    default:
      return state;
  }
}
