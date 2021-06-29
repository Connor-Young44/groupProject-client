import { Container, Row, Col, Button } from "react-bootstrap"
import React from "react"
import Select from "../components/HomePageComponents/Select"
import MovieDetailsCard from "../components/HomePageComponents/MovieDetailsCard"

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
        <Button
          type="submit"
          variant="danger"
          style={{ width: "200px", height: "100px" }}
        >
          Generate Series
        </Button>
      </Row>
    </Container>
  )
}
