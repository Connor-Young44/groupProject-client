import React from "react"
import { Card, Button } from "react-bootstrap"

export default function MovieDetailsCard(props) {
  return (
    <div>
      <Card className="bg-dark text-white">
        <Card.Img
          src="https://www.quirkybyte.com/wp-content/uploads/2017/12/13-1-1-780x405.jpg"
          alt="Card image"
          style={{ opacity: "0.6" }}
        />
        <Card.ImgOverlay>
          <Card.Title
            style={{ position: "absolute", top: "240px", fontSize: "2rem" }}
          >
            Dragon Ball Z - The movie
          </Card.Title>
          <Card.Text></Card.Text>
          <Card.Text></Card.Text>
          <Button
            variant="light"
            style={{ position: "absolute", bottom: "20px", left: "20px" }}
          >
            <i class="fas fa-plus-circle" style={{ color: "black" }}></i> Add to
            list
          </Button>
          <Button
            variant="dark"
            style={{ position: "absolute", bottom: "20px", left: "150px" }}
          >
            <i class="fas fa-info-circle" style={{ color: "white" }}></i> More
            Info
          </Button>
        </Card.ImgOverlay>
      </Card>
    </div>
  )
}
