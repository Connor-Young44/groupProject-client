export const setGenreRedux = (genreId) => {
  return {
    type: "filters/setGenre",
    payload: genreId,
  };
};

export const setRatingRedux = (rating) => {
  return {
    type: "filters/setRating",
    payload: rating,
  };
};
