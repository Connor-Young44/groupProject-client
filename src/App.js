import { Switch, Route } from "react-router-dom";

import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import MovieList from "./components/HomePageComponents/MovieList";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <header className="App-body">
        <Switch>
          <Route path="/signup" component={SignupPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/" component={HomePage} exact />
        </Switch>
        <div
          className="movie-list"
          style={{
            position: "absolute",
            top: "0",
            height: "100%",
            right: "0",
            minWidth: "100px",
            backgroundColor: "red",
          }}
        >
          <MovieList />
        </div>
      </header>
    </div>
  );
}

export default App;
