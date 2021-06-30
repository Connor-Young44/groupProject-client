import React from "react";
import { Card, Button } from "react-bootstrap";
import { useSelector } from "react-redux";

import { selectRandomMovie } from "../../store/selectors/imdb";

export default function MovieDetailsCard(props) {
  const randomMovie = useSelector(selectRandomMovie);
  console.log(randomMovie);
  return (
    <div>
      <Card className="bg-dark text-white">
        <Card.Img
          src={`https://image.tmdb.org/t/p/original/${randomMovie.backdrop_path}`}
          alt="Card image"
          style={{
            opacity: "0.6",
          }}
        />
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
              <Button
                variant="light"
                style={{ marginRight: "10px", width: "130px" }}
              >
                <i class="fas fa-plus-circle" style={{ color: "black" }}></i>{" "}
                Add to list
              </Button>
              <Button
                variant="dark"
                style={{ marginRight: "10px", width: "130px" }}
              >
                <i class="fas fa-info-circle" style={{ color: "white" }}></i>{" "}
                More Info
              </Button>
            </div>
          </div>
        </Card.ImgOverlay>
      </Card>
    </div>
  );
}
