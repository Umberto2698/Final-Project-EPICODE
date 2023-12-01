import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Row xs={3} lg={5} className="w-100 pb-3 pt-4 justify-content-center">
      <Col className="mb-3 mb-lg-0">
        <div className="d-flex flex-column align-items-start justify-content-start text-secondary ">
          <Link
            to="/"
            className="d-flex align-items-start justify-content-start mb-1 text-decoration-none text-black mx-2 "
          >
            <span className="custom-fs-6 footer-text">Informazioni</span>
          </Link>
          <Link
            to="/"
            className="d-flex align-items-start justify-content-start mb-1 text-decoration-none text-black mx-2 "
          >
            <span className="custom-fs-6 footer-text">Linee guida della community</span>
          </Link>
          <Link
            to="/"
            className="d-flex align-items-start justify-content-start mb-1 text-decoration-none text-black mx-2 "
          >
            <span className="custom-fs-6 footer-text">Centro sicurezza</span>
          </Link>
        </div>
      </Col>
      <Col className="mb-3 mb-lg-0">
        <div className="d-flex flex-column align-items-start justify-content-start text-secondary ">
          <Link
            to="/"
            className="d-flex align-items-start justify-content-start mb-1 text-decoration-none text-black mx-2"
          >
            <span className="custom-fs-6 footer-text">Accessibilità </span>
          </Link>
          <Link
            to="/"
            className="d-flex align-items-start justify-content-start mb-1 text-decoration-none text-black mx-2 "
          >
            <span className="custom-fs-6 footer-text">Mobile </span>
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
            <span className="custom-fs-6 footer-text">Linkedin</span>
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
