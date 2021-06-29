import { useState } from "react";
import HomePage from "./pages/HomePage";
import WatchList from "./components/HomePageComponents/WatchList";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from "./components/NavBar";

function App() {
  const [watchListMode, setWatchListMode] = useState(true);
  return (
    <div className="App">
      <NavBar />
      <header className="App-body">
        <div>
          <HomePage
            style={{
              position: "absolute",
              height: "100%",
            }}
          />
        </div>
        {watchListMode && (
          <div
            className="movie-list"
            style={{
              position: "absolute",
              height: "100%",
              right: "0",
              width: "500px",
              backgroundColor: "#444444",
              borderLeft: "8px solid #DA0037",
            }}
          >
            <WatchList />
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
