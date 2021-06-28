import { Container, Row, Col } from "react-bootstrap"
import React from "react"
import Select from "../components/HomePageComponents/Select"

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
    </Container>
  )
}
