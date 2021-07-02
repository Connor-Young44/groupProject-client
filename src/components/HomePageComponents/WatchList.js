import React from "react";
import { ListGroup, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchThisMovie } from "../../store/actions/imdb";
import { deleteMovie, toggleWatched } from "../../store/actions/movies";
import { selectMovies } from "../../store/selectors/movies";
import "./WatchList.css";

export default function WatchList() {
  const movieList = useSelector(selectMovies);
  const dispatch = useDispatch();

  return (
    <div className="watch-list" style={{ margin: "0 20px" }}>
      <div className="watch-list-title">
        <h2>Watch List</h2>
        <p>
          Grab some popcorn and have fun with<br></br> your favorite movies and
          series.
        </p>
      </div>

      <ListGroup className="scroll-side" variant="flush">
        {movieList.map((item) => (
          <ListGroup.Item
            key={item.id}
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
              <button
                className="delete-button"
                onClick={() => dispatch(deleteMovie(item.id))}
              >
                <i className="far fa-trash-alt"></i>
              </button>
              <button
                className="link-button"
                onClick={() => dispatch(fetchThisMovie(item.tmdbId, item.type))}
              >
                <h3>{item.title}</h3>
              </button>
            </div>

            <Button
              className={item.isWatched ? "watched" : "to-watch"}
              onClick={() => dispatch(toggleWatched(item.id))}
            >
              Watched
            </Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}
