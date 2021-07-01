import { Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import Select from "../components/HomePageComponents/Select";
import MovieDetailsCard from "../components/HomePageComponents/MovieDetailsCard";
import "./HomePage.css";

import { fetchMoviesList } from "../store/actions/imdb";
import {
  setGenreRedux,
  setRatingRedux,
  setTypeRedux,
} from "../store/actions/filters";

import { selectFilters } from "../store/selectors/filters";

export default function HomePage() {
  const dispatch = useDispatch();

  const filters = useSelector(selectFilters);

  useEffect(() => {
    dispatch(
      fetchMoviesList(
        filters.genre,
        filters.minRat,
        Math.ceil(Math.random() * 10),
        filters.type
      )
    );
  }, [dispatch, filters]);

  console.log(filters);

  const randomButton = (e) => {
    dispatch(
      fetchMoviesList(
        filters.genre,
        filters.minRat,
        Math.ceil(Math.random() * 10),
        filters.type
      )
    );
  };

  const genreArrayMovies = [
    {
      id: 28,
      name: "Action",
    },
    {
      id: 12,
      name: "Adventure",
    },
    {
      id: 16,
      name: "Animation",
    },
    {
      id: 35,
      name: "Comedy",
    },
    {
      id: 80,
      name: "Crime",
    },
    {
      id: 99,
      name: "Documentary",
    },
    {
      id: 18,
      name: "Drama",
    },
    {
      id: 10751,
      name: "Family",
    },
    {
      id: 14,
      name: "Fantasy",
    },
    {
      id: 36,
      name: "History",
    },
    {
      id: 27,
      name: "Horror",
    },
    {
      id: 10402,
      name: "Music",
    },
    {
      id: 9648,
      name: "Mystery",
    },
    {
      id: 10749,
      name: "Romance",
    },
    {
      id: 878,
      name: "Science Fiction",
    },
    {
      id: 10770,
      name: "TV Movie",
    },
    {
      id: 53,
      name: "Thriller",
    },
    {
      id: 10752,
      name: "War",
    },
    {
      id: 37,
      name: "Western",
    },
  ];
  const genreArrayTv = [
    {
      id: 10759,
      name: "Action & Adventure",
    },
    {
      id: 16,
      name: "Animation",
    },
    {
      id: 35,
      name: "Comedy",
    },
    {
      id: 80,
      name: "Crime",
    },
    {
      id: 99,
      name: "Documentary",
    },
    {
      id: 18,
      name: "Drama",
    },
    {
      id: 10751,
      name: "Family",
    },
    {
      id: 10762,
      name: "Kids",
    },
    {
      id: 9648,
      name: "Mystery",
    },
    {
      id: 10763,
      name: "News",
    },
    {
      id: 10764,
      name: "Reality",
    },
    {
      id: 10765,
      name: "Sci-Fi & Fantasy",
    },
    {
      id: 10766,
      name: "Soap",
    },
    {
      id: 10767,
      name: "Talk",
    },
    {
      id: 10768,
      name: "War & Politics",
    },
    {
      id: 37,
      name: "Western",
    },
  ];
  const genreArray = filters.type === "movie" ? genreArrayMovies : genreArrayTv;

  const ratingArray = [
    { id: 1, name: 1 },
    { id: 2, name: 2 },
    { id: 3, name: 3 },
    { id: 4, name: 4 },
    { id: 5, name: 5 },
    { id: 6, name: 6 },
    { id: 7, name: 7 },
    { id: 8, name: 8 },
    { id: 9, name: 9 },
    { id: 10, name: 10 },
  ];

  const typeArray = [
    { id: "movie", name: "Movie" },
    { id: "tv", name: "Tv Series" },
  ];

  return (
    <Container>
      <Row>
        <Col>
          <Select
            title="Rating"
            array={ratingArray}
            actionType={setRatingRedux}
          />
        </Col>
        <Col>
          <Select title="Genre" array={genreArray} actionType={setGenreRedux} />
        </Col>
        <Col>
          <Select
            title="Series/Film"
            array={typeArray}
            actionType={setTypeRedux}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <MovieDetailsCard />
        </Col>
      </Row>
      <Row>
        <button className="custom-button" onClick={randomButton}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          randomize!
        </button>
      </Row>
    </Container>
  );
}
