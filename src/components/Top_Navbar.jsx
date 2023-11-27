import { Col, Container, Navbar, Row } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import Bottom_NavBar from "./Bottom_NavBar";

const Top_Navbar = () => {
  const location = useLocation();
  return (
    <>
      <Navbar expand="md" className="h-100 z-5 bg-body-tertiary px-3">
        <Container fluid="xl" className="h-100 rounded-start-pill nav-shadow">
          <Row className="flex-grow-1 h-100">
            <Col lg={2} className="pe-1 align-items-center justify-content-center d-md-flex me-auto my-2 my-lg-0">
              <Col className="d-flex justify-content-md-center align-items-center">
                <Link
                  to="/"
                  className="text-decoration-none text-dark d-flex align-items-center justify-content-center"
                >
                  <div className="d-inline-block rounded-droplet bg-danger me-2"></div>
                  <h2 className="d-inline-block fs-5 m-0">Blood Deft</h2>
                </Link>
                <Col className="h-100 d-flex d-md-none align-items-center justify-content-end">
                  <Link
                    to="/"
                    className="h-100 mx-3 text-decoration-none text-dark d-flex align-items-center justify-content-center"
                  >
                    <span className={`${location.pathname.includes("/") ? "active" : "top_bar-text"} `}>Sign Up</span>
                  </Link>
                  <Link
                    to="/"
                    className="h-100 text-decoration-none text-dark d-flex align-items-center justify-content-center"
                  >
                    <span className={`${location.pathname.includes("/a") ? "active" : "top_bar-text"}`}>Log In</span>
                  </Link>
                </Col>
              </Col>
            </Col>
            <Col md={12} lg={10} className="h-100 align-items-center d-none d-md-flex mb-md-2">
              <Col className="h-100">
                <Link
                  to="/"
                  className="h-100 text-decoration-none text-dark d-flex align-items-center justify-content-center "
                >
                  <span className={`${location.pathname.includes("/") ? "active" : "top_bar-text"} `}>Home</span>
                </Link>
              </Col>
              <Col md={3} className="h-100">
                <Link
                  to="/"
                  className="h-100 text-decoration-none text-dark d-flex  align-items-center justify-content-center"
                >
                  <span className={`${location.pathname.includes("/a") ? "active" : "top_bar-text"} `}>
                    Make an appointment
                  </span>
                </Link>
              </Col>
              <Col className="h-100">
                <Link
                  to="/"
                  className="h-100 text-decoration-none text-dark d-flex align-items-center justify-content-center"
                >
                  <span className={`${location.pathname.includes("/") ? "active" : "top_bar-text"} `}>About</span>
                </Link>
              </Col>
              <Col className="h-100">
                <Link
                  to="/"
                  className="h-100 text-decoration-none text-dark d-flex align-items-center justify-content-center"
                >
                  <span className={`${location.pathname.includes("/") ? "active" : "top_bar-text"} `}>Profile</span>
                </Link>
              </Col>
              <Col className="h-100">
                <Link
                  to="/"
                  className="h-100 text-decoration-none text-dark d-flex align-items-center justify-content-center"
                >
                  <span className={`${location.pathname.includes("/") ? "active" : "top_bar-text"} `}>Sign Up</span>
                </Link>
              </Col>
              <Col className="h-100">
                <Link
                  to="/"
                  className="h-100 text-decoration-none text-dark d-flex align-items-center justify-content-center"
                >
                  <span className={`${location.pathname.includes("/") ? "active" : "top_bar-text"} `}>Log In</span>
                </Link>
              </Col>
            </Col>
            <Col className="d-md-none"></Col>
          </Row>
        </Container>
      </Navbar>
      <div className="d-md-none">
        <Bottom_NavBar />
      </div>
    </>
  );
};

export default Top_Navbar;
