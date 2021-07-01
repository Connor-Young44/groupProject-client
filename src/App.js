import { useEffect, useState } from "react";
import HomePage from "./pages/HomePage";
import WatchList from "./components/HomePageComponents/WatchList";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from "./components/NavBar";
import { useDispatch, useSelector } from "react-redux";
import { getUserWithStoredToken } from "./store/actions/user";
import { selectUser } from "./store/selectors/user";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserWithStoredToken());
  }, [dispatch]);
  const [watchListMode, setWatchListMode] = useState(false);
  const user = useSelector(selectUser);
  return (
    <div className="App">
      <NavBar onClick={() => setWatchListMode(!watchListMode)} />
      <div className="App-body">
        <div className="page-layout">
          <HomePage />
        </div>

        {watchListMode && user.id && (
          <div className="side-bar">
            <WatchList />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
