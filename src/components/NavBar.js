import axios from "axios"
import React, { useState } from "react"
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  Container,
  Row,
  Col,
} from "react-bootstrap"

export default function NavBar() {
  const [loginMode, setLoginMode] = useState(true)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = async () => {
    if (loginMode) {
      await axios.post("/login")
    } else {
      await axios.post("/signup")
    }
  }
  return (
    <div>
      {/* <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">MOVIE PROJECT</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/login">Login</Nav.Link>
          <Nav.Link href="/signup">Signup</Nav.Link>
        </Nav>
      </Navbar> */}
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="#home">
          <img
            style={{ width: "100px" }}
            src="https://lh3.googleusercontent.com/proxy/vkIVaGYMY2ZHAg3iWofRfm-NLGbwRwnq8EvkIle8CglpwAJeJ4Fd5DXg7LcqZVYXu3doMItf_HQ2gGkDi7BUdhCj2yWH6mOrIHVwr1KkfCjVi7XFq4DRamVwz1jqQV4liBQOqtg"
          ></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <div>
            <div>
              <Form inline onSubmit={handleSubmit}>
                <FormControl
                  type="text"
                  placeholder="Email"
                  className="mr-sm-2"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <FormControl
                  type="password"
                  placeholder="Password"
                  className="mr-sm-2"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {loginMode ? (
                  <>
                    <Button
                      type="submit"
                      variant="outline-success"
                      style={{ width: "80px" }}
                    >
                      Login
                    </Button>
                  </>
                ) : (
                  <Button
                    type="submit"
                    variant="outline-success"
                    style={{ width: "80px" }}
                  >
                    Signup
                  </Button>
                )}
              </Form>
            </div>
            <div style={{ textAlign: "right" }}>
              <Button
                variant="link"
                style={{
                  fontSize: "0.7rem",
                  padding: "5px 0 0",
                }}
                onClick={() => {
                  setLoginMode(!loginMode)
                }}
              >
                {loginMode ? "Click here to Sign Up" : "Click here to Login"}
              </Button>
            </div>
          </div>
        </Navbar.Collapse>
      </Navbar>
      {/* <Navbar bg="dark" variant="dark" expand="sm">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto"></Nav>
        </Navbar.Collapse>
      </Navbar> */}
    </div>
  )
}
