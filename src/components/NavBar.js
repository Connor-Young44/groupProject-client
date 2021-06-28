import React from "react"
import { Navbar, Nav } from "react-bootstrap"

export default function NavBar() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">MOVIE PROJECT</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/login">Login</Nav.Link>
          <Nav.Link href="/signup">Signup</Nav.Link>
        </Nav>
      </Navbar>
    </div>
  )
}
