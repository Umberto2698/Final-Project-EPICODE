import { useState } from "react";
import { Button, Col, FloatingLabel, Form, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [newProfile, setNewProfile] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch();
  };
  return (
    <main style={{ height: "100vh", paddingBottom: "0" }}>
      <div className="grid text-center h-100">
        <div className="g-col-12 g-col-md-6 sign-up-decoration d-flex align-items-center justify-content-center ">
          <div className="position-relative text-black z-1 px-2">
            <div className="droplet"></div>
            <div className="position-relative pt-md-5 pb-5 mb-5">
              <h3 className="fw-bold custom-fs-1 mb-2 ">Donate Blood</h3>
              <p className="fs-3">A drop for you, an ocean for someone else.</p>
            </div>
            <img src="./assets/Sign-up2.png" alt="" />
          </div>
        </div>
        <div className="g-col-12 g-col-md-6 d-flex align-items-center justify-content-center">
          <div className="text-black custom-w-3">
            <h2 className="fw-bold custom-fs-1 mb-3">Sign Up</h2>
            <p className="fs-3">Create Account</p>
            <Form onSubmit={handleSubmit}>
              <FloatingLabel
                controlId="floatingName"
                label="Name"
                className="mb-4 clr-secondary border-secondary rounded-4 fw-bold fs-6"
              >
                <Form.Control
                  value={newProfile.name}
                  onChange={(e) => setNewProfile({ ...newProfile, name: e.target.value })}
                  type="text"
                  required
                  placeholder="name"
                  className="rounded-4 custom-input fs-5"
                />
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingSurname"
                label="Surname"
                className="mb-4 clr-secondary border-secondary rounded-4 fw-bold fs-6"
              >
                <Form.Control
                  value={newProfile.surname}
                  onChange={(e) => setNewProfile({ ...newProfile, surname: e.target.value })}
                  type="text"
                  required
                  placeholder="surname"
                  className="rounded-4 custom-input fs-5"
                />
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingEmail"
                label="Email"
                className="mb-4 clr-secondary border-secondary rounded-4 fw-bold fs-6"
              >
                <Form.Control
                  value={newProfile.email}
                  onChange={(e) => setNewProfile({ ...newProfile, email: e.target.value })}
                  type="email"
                  required
                  placeholder="name@example.com"
                  className="rounded-4 custom-input fs-5"
                />
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingPassword"
                label="Password"
                className="mb-4 clr-secondary border-secondary rounded-4 fw-bold fs-6"
              >
                <Form.Control
                  value={newProfile.password}
                  onChange={(e) => setNewProfile({ ...newProfile, password: e.target.value })}
                  type="password"
                  placeholder="password"
                  required
                  className="rounded-4 custom-input fs-5"
                />
              </FloatingLabel>
              <Button className="text-white w-100 rounded-4 py-2 mb-5" type="submit">
                Sign Up
              </Button>
            </Form>
            <div className="mb-3 d-flex align-items-end justify-content-center">
              <div style={{ width: "50px" }} className="border-bottom border-black"></div>
              <p style={{ lineHeight: "3px" }} className="mb-0 mx-3">
                Or
              </p>
              <div style={{ width: "50px" }} className="border-bottom border-black"></div>
            </div>
            <Row>
              <Col></Col>
            </Row>
            <p>
              Alredy have an account? <span>Log In</span>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};
export default SignUp;
