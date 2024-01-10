import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Row xs={3} lg={5} className="custom-w-2 pb-3 pt-4 justify-content-around">
      <Col className="mb-3 mb-lg-0">
        <div className="d-flex flex-column align-items-start justify-content-start text-secondary ">
          <Link
            to="/"
            className="d-flex align-items-start justify-content-start mb-1 text-decoration-none text-black mx-2 "
          >
            <span className="custom-fs-6 footer-text">Information</span>
          </Link>
          <Link
            to="/"
            className="d-flex align-items-start justify-content-start mb-1 text-decoration-none text-black mx-2 "
          >
            <span className="custom-fs-6 footer-text">Community Guidelines</span>
          </Link>
          <Link
            to="/"
            className="d-flex align-items-start justify-content-start mb-1 text-decoration-none text-black mx-2 "
          >
            <span className="custom-fs-6 footer-text">Security Center</span>
          </Link>
        </div>
      </Col>
      <Col className="mb-3 mb-lg-0">
        <div className="d-flex flex-column align-items-start justify-content-start text-secondary ">
          <Link
            to="/"
            className="w-100 d-flex align-items-start justify-content-start mb-1 text-decoration-none text-black mx-2"
          >
            <span className="custom-fs-6 footer-text">Accessibility</span>
          </Link>
          <Link
            to="/"
            className="w-100 d-flex align-items-start justify-content-start mb-1 text-decoration-none text-black mx-2 "
          >
            <span className="custom-fs-6 footer-text">Mobile</span>
          </Link>
        </div>
      </Col>
      <Col className="mb-3 mb-lg-0">
        <div className="d-flex flex-column align-items-start justify-content-start text-secondary ">
          <Link
            to="https://www.linkedin.com/in/umbertozappullawebdeveloper/"
            target="_blank"
            className="d-flex align-items-start justify-content-start mb-1 text-decoration-none text-black mx-2"
          >
            <span className="custom-fs-6 footer-text">LinkedIn</span>
          </Link>
          <Link
            to="https://github.com/Umberto2698"
            target="_blank"
            className="d-flex align-items-start justify-content-start mb-1 text-decoration-none text-black mx-2 "
          >
            <span className="custom-fs-6 footer-text">Git-Hub</span>
          </Link>
          <Link
            to="https://github.com/Umberto2698/Final-Project-EPICODE"
            target="_blank"
            className="d-flex align-items-start justify-content-start mb-1 text-decoration-none text-black mx-2 "
          >
            <span className="custom-fs-6 footer-text">Repository Project</span>
          </Link>
        </div>
      </Col>
    </Row>
  );
};
export default Footer;
