const initialState = {
  message: "empty",
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "imdb/fetchSuccess":
      return { ...action.payload };
    default:
      return state;
  }
}
