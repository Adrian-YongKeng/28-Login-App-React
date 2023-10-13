import { useContext } from 'react'
import { AuthContext } from '../AuthContext'
import { Navigate, Link } from "react-router-dom";
import { Navbar, Nav, Button } from "react-bootstrap";

export default function CustomNavbar() {
  const authContext = useContext(AuthContext);

  function logout() {
    authContext.setToken(null);
    return <Navigate to="/login" replace />
  }

  return (
    <Navbar bg="light" expand='lg' >
      <Navbar.Brand as={Link} to="/" className='mx-4'>
        My App
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link className="mx-2" as={Link} to="/">Home</Nav.Link>

          {!authContext.token && (
            <Nav.Link className="mx-2" as={Link} to="/login">Login</Nav.Link>
          )}
          {authContext.token && (
            <>
              <Nav.Link className="mx-2" as={Link} to="/dashboard">Dashboard</Nav.Link>
              <Nav.Link className="mx-2" as={Link} to="/profile">Profile</Nav.Link>
            </>
          )}
        </Nav>
        <Nav>
          {authContext.token && (
            <Button className="my-2 mx-2" variant="outline-danger" onClick={logout}>
              Logout
            </Button>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

