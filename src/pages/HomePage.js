import { Container, Row, Col } from "react-bootstrap";
import React from "react";
import Select from "../components/HomePageComponents/Select";
import MovieDetailsCard from "../components/HomePageComponents/MovieDetailsCard";
import "./HomePage.css";

export default function HomePage() {
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
