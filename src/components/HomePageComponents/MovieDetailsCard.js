import React from "react";
import { Card, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addMovieToList } from "../../store/actions/movies";

import { selectRandomMovie } from "../../store/selectors/imdb";
import { selectUser } from "../../store/selectors/user";

export default function MovieDetailsCard(props) {
  const randomMovie = useSelector(selectRandomMovie);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  console.log(randomMovie);
  return (
    <div>
      <Card className="bg-dark text-white">
        {randomMovie.backdrop_path ? (
          <Card.Img
            src={`https://image.tmdb.org/t/p/original/${randomMovie.backdrop_path}`}
            alt="Card image"
            style={{
              opacity: "0.6",
            }}
          />
        ) : (
          <Card.Img
            src="http://www.mymetrotex.com/wp-content/uploads/2021/03/image-coming-soon-placeholder.png"
            style={{ maxHeight: "600px" }}
          />
        )}
        <Card.ImgOverlay>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              width: "50%",
              position: "absolute",
              bottom: "5%",
              backgroundColor: "#2b2727b0",
              padding: "15px",
              borderRadius: "25px",
            }}
          >
            <Card.Title
              style={{
                fontSize: "2rem",

                padding: "5px",
              }}
            >
              {/* Prop title */}
              {randomMovie.title}
            </Card.Title>
            <Card.Text
              style={{
                fontSize: "1rem",
              }}
            >
              {/* Prop movie description short */}
              {randomMovie.overview}
            </Card.Text>
            <Card.Text></Card.Text>
            <div>
              {user.id && (
                <Button
                  variant="light"
                  style={{ marginRight: "10px", width: "130px" }}
                  onClick={() =>
                    dispatch(addMovieToList(user.id, randomMovie.title))
                  }
                >
                  <i class="fas fa-plus-circle" style={{ color: "black" }}></i>{" "}
                  Add to list
                </Button>
              )}
            </div>
          </div>
        </Card.ImgOverlay>
      </Card>
    </div>
  );
}
