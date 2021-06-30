import { Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import Select from "../components/HomePageComponents/Select";
import MovieDetailsCard from "../components/HomePageComponents/MovieDetailsCard";
import "./HomePage.css";

import { fetchMoviesList } from "../store/actions/imdb";
import { setGenreRedux } from "../store/actions/filters";

import { selectFilters } from "../store/selectors/filters";

export default function HomePage() {
  const dispatch = useDispatch();

  const filters = useSelector(selectFilters);

  useEffect(() => {
    dispatch(fetchMoviesList(filters.genre, 5, Math.ceil(Math.random() * 10)));
  }, [dispatch]);

  console.log(filters);

  const randomButton = (e) => {
    dispatch(fetchMoviesList(filters.genre, 5, Math.ceil(Math.random() * 10)));
  };

  const genreArray = [
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

  return (
    <Container>
      <Row>
        <Col>
          <Select title="Country" />
        </Col>
        <Col>
          <Select title="Genre" array={genreArray} actionType={setGenreRedux} />
        </Col>
        <Col>
          <Select title="Series/Film" />
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
