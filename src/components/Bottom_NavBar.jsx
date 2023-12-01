import { Col, Container, Navbar, Row } from "react-bootstrap";

import { Link, useLocation } from "react-router-dom";
import { Calendar2Plus, InfoCircle, HouseDoor, Person } from "react-bootstrap-icons";

const Bottom_NavBar = () => {
  const location = useLocation();
  return (
    <>
      <Navbar expand="lg" style={{ height: "52px" }} className="position-fixed bottom-0 z-1 w-100 bg-white p-0 pt-1">
        <Container fluid="xl" className="h-100">
          <Row className="flex-grow-1 h-100">
            <Col className="d-flex align-items-center flex-grow-1">
              <Row className="flex-grow-1 h-100">
                <Col className="h-100">
                  <Link
                    to="/"
                    className={`nav-link d-flex flex-column h-100 p-0 align-items-center bottom_bar-text justify-content-center ${
                      location.pathname === "/a" ? "active-xs" : ""
                    }`}
                  >
                    <HouseDoor size={18}></HouseDoor>
                    <span className="custom-fs-6">Home</span>
                  </Link>
                </Col>
                <Col className="h-100">
                  <Link
                    to="/mynetwork"
                    className={`h-100 nav-link d-flex flex-column p-0 align-items-center bottom_bar-text justify-content-center ${
                      location.pathname === "/appointment" ? "active-xs" : ""
                    }`}
                  >
                    <Calendar2Plus size={18}></Calendar2Plus>
                    <span className="custom-fs-6">Appointment</span>
                  </Link>
                </Col>
                <Col className="h-100">
                  <Link
                    to="/publish"
                    className={`h-100 nav-link d-flex flex-column p-0 align-items-center bottom_bar-text justify-content-center ${
                      location.pathname === "/about" ? "active-xs" : ""
                    }`}
                  >
                    <InfoCircle size={18}></InfoCircle>
                    <span className="custom-fs-6">About</span>
                  </Link>
                </Col>

                <Col className="h-100">
                  <Link
                    to="/notifications"
                    className={`h-100 nav-link d-flex flex-column p-0 align-items-center bottom_bar-text justify-content-center ${
                      location.pathname === "/profile" ? "active-xs" : ""
                    }`}
                  >
                    <Person size={18}></Person>
                    <span className="custom-fs-6">Profile</span>
                  </Link>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Navbar>
    </>
  );
};

export default Bottom_NavBar;
