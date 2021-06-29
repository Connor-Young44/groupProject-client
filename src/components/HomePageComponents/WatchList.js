import React from "react"
import { ListGroup, Button, Row } from "react-bootstrap"
import "./WatchList.css"

export default function WatchList() {
  const movieList = [
    { title: "Spider Man" },
    { title: "Spider Man" },
    { title: "Spider Man" },
    { title: "Spider Man" },
    { title: "Spider Man" },
    { title: "Spider Man" },
    { title: "Spider Man" },
  ]

  return (
    <div style={{ margin: "0 20px" }}>
      <div className="watch-list-title">
        <h2>Watch List</h2>
        <p>
          Grab some popcorn and have fun with<br></br> your favorite movies and
          series.
        </p>
      </div>

      <ListGroup variant="flush">
        {movieList.map((item) => (
          <ListGroup.Item
            style={{ margin: "10px", backgroundColor: "transparent" }}
          >
            <Row>
              <h3 style={{ fontSize: "1.2rem", marginRight: "20px" }}>
                {item.title}
              </h3>
              <Button className="watch-list-button ">Watched</Button>
            </Row>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  )
}
