import { Col, Container, Row } from "react-bootstrap";
import { ArrowRight } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import hero_img from "../assets/hero_img.jpg";

const Home = () => {
  return (
    <main>
      <Container className="pt-3 pt-sm-5">
        <section>
          <Row>
            <Col className="d-flex align-items-center justify-content-center">
              <div>
                <h1 className="custom-fs-1 fw-bold mb-4">Donate blood, save life!</h1>
                <p className="fs-6 fst-italic mb-3 mb-sm-5">
                  With a drop of love, give hope: donate your blood, give life.
                </p>
                <Link to="/appointment" className="text-decoration-none cursor-pointer">
                  <button className="d-flex align-items-center border-0 rounded-start-pill custom-border-radius fw-bold me-4 me-sm-0 ms-auto ms-sm-3 mt-0 mt-sm-4 p-2 ps-3">
                    <span className="fs-6">Donate Now</span>
                    <div className="d-flex align-items-center justify-content-center ms-3 rounded-droplet-md text-white">
                      <ArrowRight size={20}></ArrowRight>
                    </div>
                  </button>
                </Link>
                <div className="d-sm-none mx-auto mt-4 rounded-droplet-lg overflow-hidden hero-image">
                  <img src={hero_img} className="h-100 object-fit-cover" alt="" />
                </div>
              </div>
            </Col>
            <Col className="d-none d-sm-flex align-items-center justify-content-center">
              <div className="rounded-droplet-lg overflow-hidden hero-image">
                <img src={hero_img} className="h-100 object-fit-cover" alt="" />
              </div>
            </Col>
          </Row>
        </section>
        <section className="d-none d-md-block custom-section mt-5 mb-5">
          <Row>
            <Col md={10} lg={9} className="d-flex align-items-center justify-content-center text-white py-3 mt-4">
              <div>
                <h2 className="fs-2 mb-3">We are helping pepole all around the world</h2>
                <p>
                  The blood donation association has done an extraordinary job in bringing together generous donors to
                  save lives. Their dedication and collaboration are crucial because donating blood means providing
                  tangible hope to those in need.
                </p>
              </div>
            </Col>
            <Col md={2} lg={3} className="d-flex align-items-center justify-content-center">
              <Link to="/appointment" className="text-decoration-none cursor-pointer">
                <button className="d-flex align-items-center border-0 rounded-start-pill custom-border-radius fw-bold ms-auto p-2 ps-lg-3">
                  <span className="fs-6 d-none d-lg-inline">Donate Now</span>
                  <div className="d-flex align-items-center justify-content-center ms-0 ms-lg-3 rounded-droplet-md text-white">
                    <ArrowRight size={20}></ArrowRight>
                  </div>
                </button>
              </Link>
            </Col>
          </Row>
        </section>
        <section className="pt-5 d-none d-md-block">
          <div className="mb-5">
            <h2 className="fw-bold fs-2">Donation process</h2>
            <p className="fs-6 mt-3">Follow these simple steps and help us give hope to those in need.</p>
          </div>
          <Row className="row-cols-1 row-cols-sm-2 row-cols-md-4 pt-5">
            <Col className="step position-relative mb-5">
              <h3 className="fw-bold fs-3 mb-3">Registration</h3>
              <p className="custom-fs-6">
                If you don&apos;t have an account yet, click on
                <Link to="/signUp" className="fw-bold text-decoration-none text-black cursor-pointer">
                  &nbsp;Sign Up&nbsp;
                </Link>
                and fill out the form; otherwise, click
                <Link to="/signUp/logIn" className="fw-bold text-decoration-none text-black cursor-pointer">
                  &nbsp;Log In&nbsp;
                </Link>
                and access your account.
              </p>
            </Col>
            <Col className="step position-relative mb-5">
              <h3 className="fw-bold fs-3 mb-3">Screening</h3>
              <p className="custom-fs-6">
                If this is your first donation at our centers, update your profile by clicking
                <Link to="/profile" className="fw-bold text-decoration-none text-black cursor-pointer">
                  &nbsp;here
                </Link>
                .
              </p>
            </Col>
            <Col className="step position-relative mb-5">
              <h3 className="fw-bold fs-3 mb-3">Donation</h3>
              <p className="custom-fs-6">
                Book an appointment at one of our locations easily and quickly by clicking
                <Link to="/appointment" className="fw-bold text-decoration-none text-black cursor-pointer">
                  &nbsp;here
                </Link>
                .
              </p>
            </Col>
            <Col className="step position-relative mb-5">
              <h3 className="fw-bold fs-3 mb-3">Refreshment</h3>
              <p className="custom-fs-6">
                After the donation, a period of rest follows. We will contact you via email as soon as your body is
                ready (approximately 3 months).
              </p>
            </Col>
          </Row>
        </section>
      </Container>
      <footer className="custom-bg-accent-l d-none justify-content-center align-items-center d-md-flex">
        <Footer></Footer>
      </footer>
      {/* MOBILE ONLY */}
      <section className="d-block d-md-none custom-section mt-5 mb-5 px-4">
        <Row className="align-items-center justify-content-md-between">
          <Col sm={12} className="d-flex align-items-center text-white py-3 mt-4">
            <div>
              <h2 className="fs-2 mb-3">We are helping pepole all around the world</h2>
              <p>
                The blood donation association has done an extraordinary job in bringing together generous donors to
                save lives. Their dedication and collaboration are crucial because donating blood means providing
                tangible hope to those in need.
              </p>
            </div>
          </Col>
          <Col className="d-flex align-items-center justify-content-center mb-3">
            <Link to="/appointment" className="text-decoration-none cursor-pointer">
              <button className="d-flex align-items-center border-0 rounded-start-pill custom-border-radius fw-bold ms-auto p-2">
                <span className="fs-6">Donate Now</span>
                <div className="d-flex align-items-center justify-content-center ms-3 rounded-droplet-md text-white">
                  <ArrowRight size={20}></ArrowRight>
                </div>
              </button>
            </Link>
          </Col>
        </Row>
      </section>
      <Container className="d-block d-md-none">
        <section className="pt-5 px-3">
          <div>
            <h2 className="fw-bold fs-2">Donation process</h2>
            <p className="fs-6">Follow these simple steps and help us give hope to those in need.</p>
          </div>
          <Row className="row-cols-1 row-cols-sm-2 row-cols-md-4 pt-5">
            <Col className="step position-relative mt-5 mb-5">
              <h3 className="fw-bold fs-3 mb-2">Registration</h3>
              <p className="fs-6">
                If you don&apos;t have an account yet, click on
                <Link to="/signUp" className="fw-bold text-decoration-none text-black cursor-pointer">
                  &nbsp;Sign Up&nbsp;
                </Link>
                and fill out the form; otherwise, click
                <Link to="/signUp/logIn" className="fw-bold text-decoration-none text-black cursor-pointer">
                  &nbsp;Log In&nbsp;
                </Link>
                and access your account.
              </p>
            </Col>
            <Col className="step position-relative mt-5 mb-5">
              <h3 className="fw-bold fs-3 mb-2">Screening</h3>
              <p className="fs-6">
                If this is your first donation at our centers, fill out the modal by clicking
                <Link to="/" className="fw-bold text-decoration-none text-black cursor-pointer">
                  &nbsp;here
                </Link>
                .
              </p>
            </Col>
            <Col className="step position-relative mt-5 mb-5">
              <h3 className="fw-bold fs-3 mb-2">Donation</h3>
              <p className="fs-6">
                Book an appointment at one of our locations easily and quickly by clicking
                <Link to="/" className="fw-bold text-decoration-none text-black cursor-pointer">
                  &nbsp;here
                </Link>
                .
              </p>
            </Col>
            <Col className="step position-relative mt-5 mb-5">
              <h3 className="fw-bold fs-3 mb-2">Refreshment</h3>
              <p className="fs-6">
                After the donation, a period of rest follows. We will contact you via email as soon as your body is
                ready (approximately 3 months).
              </p>
            </Col>
          </Row>
        </section>
      </Container>
      <footer className="custom-bg-accent-l d-flex justify-content-center align-items-center d-md-none">
        <Footer></Footer>
      </footer>
    </main>
  );
};

export default Home;
