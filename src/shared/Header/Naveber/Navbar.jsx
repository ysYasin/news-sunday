import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import userAvater from "../../../assets/user.png";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { authContext } from "../../../AuthProvider/AuthProvider";

function NavigationBar() {
  const { user, Logout } = useContext(authContext);

  //
  const handleSignOut = () => {
    Logout();
  };
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-white">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Link
              className="text-black me-3 link-underline-light fw-medium fs-5"
              to="/"
            >
              Home
            </Link>

            <Link
              className="text-black me-3 link-underline-light fw-medium fs-5"
              to="/main/about"
            >
              About
            </Link>
            <Link
              className="text-black me-3 link-underline-light fw-medium fs-5"
              to="/main/career"
            >
              Career
            </Link>
          </Nav>
          <Nav className="gap-2">
            <img src={userAvater} width={"50px"} alt="" />{" "}
            {user ? (
              <div className="d-flex align-items-center gap-2">
                <h6>{user.displayName}</h6>
                <Button onClick={handleSignOut} variant="secondary">
                  Logout
                </Button>
              </div>
            ) : (
              <Link to={"/main/login"}>
                <Button variant="secondary">Login</Button>
              </Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
