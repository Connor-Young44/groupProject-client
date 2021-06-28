import { Switch, Route } from "react-router-dom"
import SignupPage from "./pages/SignupPage"
import LoginPage from "./pages/LoginPage"
import HomePage from "./pages/HomePage"
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import NavBar from "./components/NavBar"

function App() {
  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        <Switch>
          <Route path="/signup" component={SignupPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/" component={HomePage} exact />
        </Switch>
      </header>
    </div>
  )
}

export default App
