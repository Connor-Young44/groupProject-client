import { Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import Select from "../components/HomePageComponents/Select";
import MovieDetailsCard from "../components/HomePageComponents/MovieDetailsCard";
import { selectGenreArray } from "../store/selectors/imdb";
import "./HomePage.css";

import { fetchImdbById2, fetchImdbByGenre } from "../store/actions/imdb";

export default function HomePage() {
  const [searchId, setSearchId] = useState("0944947");

  const dispatch = useDispatch();

  const genreArray = useSelector(selectGenreArray);

  useEffect(() => {
    dispatch(fetchImdbByGenre(searchId));
  }, [dispatch, searchId]);

  console.log(genreArray);
  return (
    <Container>
      <Row>
        <Col>
          <Select title="Country" />
        </Col>
        <Col>
          <Select title="Genre" />
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
        <button className="custom-button">
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
