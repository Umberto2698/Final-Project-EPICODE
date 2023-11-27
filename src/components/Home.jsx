import { Col, Container, Navbar, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Row className="flex-grow-1">
          <Col xs={1} lg={4} className="p-1  align-items-center d-none d-md-flex"></Col>
        </Row>
      </Container>
    </Navbar>
  );
};

export default Home;
