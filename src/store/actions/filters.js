export const setGenreRedux = (genreId) => {
  return {
    type: "filters/setGenre",
    payload: genreId,
  };
};
