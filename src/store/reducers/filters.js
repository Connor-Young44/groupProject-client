const initialState = {
  minRat: 1,
  genre: 28,
  type: "movie",
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "filters/setGenre":
      return { ...state, genre: action.payload };
    case "filters/setRating":
      return { ...state, minRat: action.payload };
    case "filters/setType":
      return { ...state, type: action.payload, genre: 16 };

    default:
      return state;
  }
}
