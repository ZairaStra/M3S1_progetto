import { Button, Container, Nav, Navbar, Dropdown, Row, Col } from "react-bootstrap";
import logo from "../assets/logo.png";
import avatar from "../assets/avatar.png";
import { Component } from "react";

class MyNav extends Component {
  state = {
    showAccount: false,
  };

  /*  clickShowAccount = () => {
    this.setState((prevState) => ({
      showAccount: !prevState.showAccount,
    }));
  }; */

  render() {
    return (
      <>
        <Navbar expand="lg" className="navbar" variant="none" data-bs-theme="dark">
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
                <Button className="btn" id="accountBtn" onClick={() => this.setState({ showAccount: !this.state.showAccount })}>
                  <i className="bi bi-person-circle icons text-white"></i>
                </Button>
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        {this.state.showAccount && (
          <Container>
            <Row className="g-2 g-md-3 g-xl-4">
              <Col xs={12} md={8} lg={7}>
                <h1 className="display-3 text-white">Edit Profile</h1>
                <hr />
                <Row>
                  <Col xs={9} sm={4} lg={3}>
                    <img src={avatar} alt="avatar" className="rounded" width={100} />
                  </Col>
                  <Col xs={9} sm={8} lg={9}>
                    <h3 className="bg-secondary px-3 py-1 text-white">Strive Student</h3>
                    <div>
                      <h3 className="text-secondary mt-5">Language:</h3>
                      <Dropdown className="border-bottom border-secondary mb-4 pb-3 text-white">
                        <Dropdown.Toggle
                          className="btn text-white bg-black btn-outline-light rounded-0 px-4 py-1 languageBtn"
                          type="button"
                          aria-expanded="false"
                        >
                          English
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item href="#" active>
                            English
                          </Dropdown.Item>
                          <Dropdown.Item href="#">Spanish</Dropdown.Item>
                          <Dropdown.Item href="#">French</Dropdown.Item>
                          <Dropdown.Item href="#">Italian</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                    <div className="border-bottom border-secondary">
                      <h3 className="text-secondary mt-3 mb-3">Maturity Settings:</h3>
                      <h6 className="bg-secondary px-3 py-2 text-white">ALL MATURITY RATINGS</h6>
                      <p className="text-white py-2">Show titles of all maturity ratings for this profile</p>
                      <Button type="button" className="btn btn-dark btn-lg rounded-0 border border-secondary text-secondary mb-3 flexBtn">
                        EDIT
                      </Button>
                    </div>
                    <div>
                      <h3 className="text-secondary my-3">Autoplay Controls:</h3>
                      <p className="text-secondary">
                        <i className="bi bi-check-square"></i> Autoplay next episode in a series on all devices
                      </p>
                      <p className="text-secondary">
                        <i className="bi bi-check-square"></i> Autoplay preview while browsing on all devices
                      </p>
                    </div>
                  </Col>
                </Row>

                <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-3 py-5">
                  <Button className="btn btn-dark btn-lg rounded-0 border border-secondary text-secondary px-4 flexBtn">SAVE</Button>
                  <Button className="btn btn-dark btn-lg rounded-0 border border-secondary text-secondary px-4 flexBtn">CANCEL</Button>
                  <Button className="btn btn-dark btn-lg rounded-0 border border-secondary text-secondary px-4 flexBtn">DELETE PROFILE</Button>
                </div>
              </Col>
            </Row>
          </Container>
        )}
      </>
    );
  }
}
export default MyNav;
