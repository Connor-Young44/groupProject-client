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
        <h2>My Watch List ({movieList.length})</h2>
        <p>
          Grab some popcorn and have fun with your favorite movies and series.
        </p>
      </div>

      <ListGroup variant="flush" className="list-group-scroll">
        {movieList.map((item) => (
          <ListGroup.Item className="list-group-item">
            <div className="watch-list-item">
              <img
                src="https://cdn.pixabay.com/photo/2013/07/13/01/21/popcorn-155602_960_720.png"
                style={{ width: "25px", marginRight: "10px" }}
                alt="popcorn"
              ></img>
              <h3>{item.title}</h3>
            </div>

            <Button className={item.status ? "watched" : "to-watch"}>
              {item.status ? "watched" : "watched ?"}
            </Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  )
}
