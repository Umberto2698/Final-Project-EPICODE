import { Col, Container, Navbar, Row } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Bottom_NavBar from "./Bottom_NavBar";
import { LOGOUT } from "../redux/actions/loginActions";

const Top_Navbar = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const loginState = useSelector((state) => state.login.respLogin);

  useEffect(() => {}, [loginState]);

  return location.pathname.includes("/signUp") ? (
    <span className="d-none"></span>
  ) : (
    <>
      <Navbar expand="md" className="h-100 z-5 bg-body-tertiary linear-gradient-acc-100 px-3">
        <Container fluid="xl" className="h-100 rounded-start-pill nav-shadow">
          <Row className="flex-grow-1 h-100">
            <Col lg={2} className="pe-1 align-items-center justify-content-center d-md-flex me-auto my-2 my-lg-0">
              <Col className="d-flex justify-content-md-center align-items-center">
                <Link
                  to="/"
                  className="text-decoration-none text-dark d-flex align-items-center justify-content-center"
                >
                  <div className="d-inline-block rounded-droplet-sm bg-danger me-2"></div>
                  <h2 className="d-inline-block fs-5 m-0">BloodItaly</h2>
                </Link>
                {loginState.authorizationToken.token === null || loginState.authorizationToken.token === "" ? (
                  <Col className="h-100 d-flex d-md-none align-items-center justify-content-end">
                    <Link
                      to="/signUp"
                      className="h-100 mx-3 text-decoration-none text-dark d-flex align-items-center justify-content-center"
                    >
                      <span className="top_bart-text">Sign Up</span>
                    </Link>
                    <Link
                      to="/signUp/logIn"
                      className="h-100 text-decoration-none text-dark d-flex align-items-center justify-content-center"
                    >
                      <span className="top_bar-text">Log In</span>
                    </Link>
                  </Col>
                ) : (
                  <Col className="h-100 d-flex d-md-none align-items-center justify-content-end">
                    <Link
                      to="/"
                      onClick={() => dispatch({ type: LOGOUT, payload: "" })}
                      className="h-100 text-decoration-none text-dark d-flex align-items-center justify-content-center"
                    >
                      <span className="top_bar-text">Log Out</span>
                    </Link>
                  </Col>
                )}
              </Col>
            </Col>
            <Col md={12} lg={10} className="h-100 align-items-center d-none d-md-flex mb-md-1 mb-lg-0">
              <Col className="h-100">
                <Link
                  to="/"
                  className="h-100 text-decoration-none text-dark d-flex align-items-center justify-content-center "
                >
                  <span className={`${location.pathname === "/" ? "active" : "top_bar-text"} `}>Home</span>
                </Link>
              </Col>
              <Col md={3} className="h-100">
                <Link
                  to="/appointment"
                  className="h-100 text-decoration-none text-dark d-flex  align-items-center justify-content-center"
                >
                  <span className={`${location.pathname.includes("/appointment") ? "active" : "top_bar-text"} `}>
                    Book an appointment
                  </span>
                </Link>
              </Col>
              <Col className="h-100">
                <Link
                  to="/about"
                  className="h-100 text-decoration-none text-dark d-flex align-items-center justify-content-center"
                >
                  <span className={`${location.pathname.includes("/about") ? "active" : "top_bar-text"} `}>About</span>
                </Link>
              </Col>
              <Col className="h-100">
                <Link
                  to="/profile"
                  className="h-100 text-decoration-none text-dark d-flex align-items-center justify-content-center"
                >
                  <span className={`${location.pathname.includes("/profile") ? "active" : "top_bar-text"} `}>
                    Profile
                  </span>
                </Link>
              </Col>
              {loginState.authorizationToken.token === null || loginState.authorizationToken.token === "" ? (
                <>
                  <Col className="h-100">
                    <Link
                      to="/signUp"
                      className="h-100 text-decoration-none text-dark d-flex align-items-center justify-content-center"
                    >
                      <span className="top_bar-text">Sign Up</span>
                    </Link>
                  </Col>
                  <Col className="h-100">
                    <Link
                      to="/signUp/logIn"
                      className="h-100 text-decoration-none text-dark d-flex align-items-center justify-content-center"
                    >
                      <span className="top_bar-text">Log In</span>
                    </Link>
                  </Col>
                </>
              ) : (
                <Col className="h-100">
                  <Link
                    to="/"
                    onClick={() => dispatch({ type: LOGOUT, payload: { token: null } })}
                    className="h-100 text-decoration-none text-dark d-flex align-items-center justify-content-center"
                  >
                    <span className="top_bar-text">Log Out</span>
                  </Link>
                </Col>
              )}
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
