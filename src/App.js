import { useState } from "react"
import HomePage from "./pages/HomePage"
import WatchList from "./components/HomePageComponents/WatchList"
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import NavBar from "./components/NavBar"

function App() {
  const [watchListMode, setWatchListMode] = useState(false)
  return (
    <div className="App">
      <NavBar onClick={() => setWatchListMode(!watchListMode)} />
      <div className="App-body">
        <div className="page-layout">
          <HomePage />
        </div>

        {watchListMode && (
          <div className="side-bar">
            <WatchList />
          </div>
        )}
      </div>
    </div>
  )
}

export default App
