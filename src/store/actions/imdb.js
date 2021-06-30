import axios from "axios";

const fetchSuccess = (movesList) => {
  return {
    type: "imdb/fetchSuccess",
    payload: movesList,
  };
};

export const fetchImdbById2 = (id) => {
  return async (dispatch, getState) => {
    const options = {
      method: "GET",
      url: "https://imdb8.p.rapidapi.com/title/get-overview-details",
      params: { tconst: `tt${id}`, currentCountry: "US" },
      headers: {
        "x-rapidapi-key": "e3e0725195msh02662777bb9ed11p1fe8a6jsn5ddc19d44489",
        "x-rapidapi-host": "imdb8.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };
};

export const fetchImdbByGenre = (id) => {
  return async (dispatch, getState) => {
    var options = {
      method: "GET",
      url: "https://imdb8.p.rapidapi.com/title/get-popular-movies-by-genre",
      params: { genre: "/chart/popular/genre/adventure" },
      headers: {
        "x-rapidapi-key": "e3e0725195msh02662777bb9ed11p1fe8a6jsn5ddc19d44489",
        "x-rapidapi-host": "imdb8.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        // console.log(response.data);
        dispatch(fetchSuccess(response.data));
      })
      .catch(function (error) {
        console.error(error);
      });
  };
};
