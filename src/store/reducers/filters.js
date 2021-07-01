const initialState = {
  minRat: 0,
  genre: 28,
  film: true,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "filters/setGenre":
      return { ...state, genre: action.payload };
    case "filters/setRating":
      return { ...state, minRat: action.payload };
    default:
      return state;
  }
}
