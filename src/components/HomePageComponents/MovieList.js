import React from "react"
import { ListGroup, Button, Image, Container, Col, Row } from "react-bootstrap"

export default function MovieList() {
  return (
    <div style={{ margin: "0 20px" }}>
      <ListGroup variant="flush">
        <ListGroup.Item>
          <Container>
            <Row>
              <Col>
                <Image
                  src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22171%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20171%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_17a57491ee7%20text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3A-apple-system%2CBlinkMacSystemFont%2C%26quot%3BSegoe%20UI%26quot%3B%2CRoboto%2C%26quot%3BHelvetica%20Neue%26quot%3B%2CArial%2C%26quot%3BNoto%20Sans%26quot%3B%2C%26quot%3BLiberation%20Sans%26quot%3B%2Csans-serif%2C%26quot%3BApple%20Color%20Emoji%26quot%3B%2C%26quot%3BSegoe%20UI%20Emoji%26quot%3B%2C%26quot%3BSegoe%20UI%20Symbol%26quot%3B%2C%26quot%3BNoto%20Color%20Emoji%26quot%3B%2C%20monospace%3Bfont-size%3A10pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_17a57491ee7%22%3E%3Crect%20width%3D%22171%22%20height%3D%22180%22%20fill%3D%22%23373940%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2260.7578125%22%20y%3D%2294.8%22%3E171x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                  thumbnail
                />
              </Col>
              <Col>
                Spiderman
                <Button variant="secondary">Secondary</Button>
              </Col>
            </Row>
          </Container>
        </ListGroup.Item>
        <ListGroup.Item>
          <Image src="holder.js/171x180" thumbnail />
          Spiderman 1<Button variant="secondary">Secondary</Button>
        </ListGroup.Item>
        <ListGroup.Item>
          <Image src="holder.js/171x180" thumbnail />
          Spiderman 2<Button variant="secondary">Secondary</Button>
        </ListGroup.Item>
      </ListGroup>
    </div>
  )
}
