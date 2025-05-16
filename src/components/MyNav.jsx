import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../assets/logo.png";

const MyNav = function () {
  return (
    <Navbar expand="lg" bg="dark" variant="dark" data-bs-theme="dark" sticky="top">
      <Container fluid>
        <Navbar.Brand href="#">
          <img src={logo} alt="Logo" style={{ width: "100px", height: "55px" }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarContent" />
        <Navbar.Collapse id="navbarContent">
          <Nav className="me-auto mb-2 mb-lg-0">
            <Nav.Link className="fw-bold" active href="#">
              Home
            </Nav.Link>
            <Nav.Link className="fw-bold" href="#">
              TV Shows
            </Nav.Link>
            <Nav.Link className="fw-bold" href="#">
              Movies
            </Nav.Link>
            <Nav.Link className="fw-bold" href="#">
              Recently Added
            </Nav.Link>
            <Nav.Link className="fw-bold" href="#">
              My List
            </Nav.Link>
          </Nav>
          <div className="d-flex align-items-center gap-3">
            <i className="bi bi-search icons text-white"></i>
            <div id="kids" className="fw-bold text-white">
              KIDS
            </div>
            <i className="bi bi-bell icons text-white"></i>
            <i className="bi bi-person-circle icons text-white"></i>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNav;
