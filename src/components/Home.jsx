import { Col, Container, Row } from "react-bootstrap";
import Top_Navbar from "./Top_Navbar";
import { ArrowRight } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main>
      <Top_Navbar></Top_Navbar>
      <Container className="mt-5">
        <section>
          <Row>
            <Col className="d-flex align-items-center justify-content-center">
              <div>
                <h1 className="custom-fs-1 fw-bold mb-4">Donate blood, save life!</h1>
                <p className="fs-6 fst-italic mb-3 mb-sm-5">
                  With a drop of love, give hope: donate your blood, give life.
                </p>
                <Link to="/" className="text-decoration-none cursor-pointer">
                  <button className="d-flex align-items-center border-0 fw-bold me-4 me-sm-0 ms-auto ms-sm-3 mt-0 mt-sm-4">
                    <span className="fs-6">Donate Now</span>
                    <div className="d-flex align-items-center justify-content-center ms-3 rounded-droplet-md text-white">
                      <ArrowRight size={20}></ArrowRight>
                    </div>
                  </button>
                </Link>
                <div className="d-sm-none mx-auto mt-4 rounded-droplet-lg hero-image"></div>
              </div>
            </Col>
            <Col className="d-none d-sm-flex align-items-center justify-content-center">
              <div className="rounded-droplet-lg hero-image"></div>
            </Col>
          </Row>
        </section>
      </Container>
    </main>
  );
};

export default Home;
