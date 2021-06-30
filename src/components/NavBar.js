import { useSelector } from "react-redux"
import { Navbar, Nav, Button } from "react-bootstrap"
import "./NavBar.css"
import { selectUser } from "../store/selectors/user"
import NavBarInput from "./NavBarInput"

export default function NavBar(props) {
  const user = useSelector(selectUser)

  return (
    <div>
      <Navbar expand="lg" className="navBar">
        <Navbar.Brand href="#home">
          <img
            style={{ width: "100px" }}
            src="https://cdn.pixabay.com/photo/2016/11/16/11/29/coupon-1828620_960_720.png"
            alt="movie poster"
          ></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto"></Nav>

          {user.email ? (
            <>
              <h5>Welcome {user.email.split("@")[0]}</h5>
              <Button
                variant="outline-danger"
                style={{ width: "80px", marginLeft: "20px" }}
                onClick={() => console.log("TODO USER LOG OUT")}
              >
                Logout
              </Button>
              <button className="watch-list-toggle" onClick={props.onClick}>
                <i class="fas fa-bars"></i>
              </button>
            </>
          ) : (
            <NavBarInput />
          )}
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}
