import { useDispatch, useSelector } from "react-redux";
import { Navbar, Nav, Button } from "react-bootstrap";
import "./NavBar.css";
import { selectUser } from "../store/selectors/user";
import NavBarInput from "./NavBarInput";
import { logOut } from "../store/actions/user";

export default function NavBar(props) {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <div>
      <Navbar expand="lg" className="navBar">
        <Navbar.Brand>
          <img
            style={{ width: "200px" }}
            src="../../logo.png"
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
                onClick={() => dispatch(logOut())}
              >
                Logout
              </Button>
              <button className="watch-list-toggle" onClick={props.onClick}>
                <i className="fas fa-video"></i> My List
              </button>
            </>
          ) : (
            <NavBarInput />
          )}
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
