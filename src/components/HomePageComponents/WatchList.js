import React from "react"
import { ListGroup, Button, Row } from "react-bootstrap"
import "./WatchList.css"

export default function WatchList() {
  const movieList = [
    { title: "Spider Man", status: false },
    { title: "Spider Man", status: false },
    {
      title: "Spider Man is the best hero ever forever whenever",
      status: false,
    },
    { title: "Spider Man", status: true },
    { title: "Spider Man", status: false },
    { title: "Spider Man", status: true },
    { title: "Spider Man", status: false },
  ]

  return (
    <div className="watch-list" style={{ margin: "0 20px" }}>
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
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderBottom: "1px solid #000",
              padding: "20px 0",
              backgroundColor: "transparent",
            }}
          >
            <div className="watch-list-item">
              <h3>{item.title}</h3>
            </div>

            <Button className={item.status ? "watched" : "to-watch"}>
              Watched
            </Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  )
}
