import { useEffect, useState } from "react";
import { Button, Col, FloatingLabel, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { fetchRegister, fetchLogin } from "../redux/actions/loginActions";

const SignUp = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const handleCallbackResponse = (response) => {
    const userObject = jwtDecode(response.credential);
    console.log(userObject);
    setGoogleProfile({ name: userObject.given_name, surname: userObject.family_name, email: userObject.email });
  };

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id: "599974988971-h22f3b3fpjq0dl5s7faadh1u37aanb4l.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });
    google.accounts.id.renderButton(document.getElementById("goggleBtn"), {
      theme: "outline",
      size: "large",
    });
  }, [location.pathname]);

  const [newProfile, setNewProfile] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
  });

  const [googleProfile, setGoogleProfile] = useState({
    name: "",
    surname: "",
    email: "",
  });

  const [oldProfile, setOldProfile] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (location.pathname.includes("/logIn")) {
      dispatch(fetchLogin(oldProfile.email, oldProfile.password));
    } else {
      dispatch(fetchRegister(newProfile.name, newProfile.surname, newProfile.email, newProfile.password));
    }
  };

  return (
    <main style={{ height: "100vh", paddingBottom: "0" }}>
      <div className="grid text-center h-100">
        <div className="g-col-12 g-col-md-6 sign-up-decoration d-flex align-items-center justify-content-center ">
          <div className="position-relative text-black z-1 px-2 mt-5">
            <div className="droplet"></div>
            <div className="position-relative pt-5 pb-5 mb-5">
              <h3 className="fw-bold custom-fs-1 mb-2 ">Donate Blood</h3>
              <p className="fs-3">A drop for you, an ocean for someone else.</p>
            </div>
            <img
              className="signUp-img mx-auto"
              src="./assets/Sign-up2.png"
              alt="Image of a patient donating blood while doctor check on her, both smiling."
            />
          </div>
        </div>
        <div className="g-col-12 g-col-md-6 d-flex align-items-center justify-content-center">
          {location.pathname.includes("/logIn") ? (
            <div className="text-black custom-w-3">
              <h2 className="fw-bold custom-fs-1 mb-3">Log In</h2>
              <p className="fs-3">Enter credentials</p>
              <Form onSubmit={handleSubmit}>
                <FloatingLabel
                  controlId="floatingEmail"
                  label="Email"
                  className="mb-4 clr-secondary border-secondary rounded-4 fw-bold fs-6"
                >
                  <Form.Control
                    value={oldProfile.email}
                    onChange={(e) => setNewProfile({ ...oldProfile, email: e.target.value })}
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
                    value={oldProfile.password}
                    onChange={(e) => setNewProfile({ ...oldProfile, password: e.target.value })}
                    type="password"
                    placeholder="password"
                    required
                    className="rounded-4 custom-input fs-5"
                  />
                </FloatingLabel>
                <Button className="text-white w-100 rounded-4 py-2 mb-5" type="submit">
                  Log In
                </Button>
              </Form>
              <div className="mb-4 d-flex align-items-end justify-content-center">
                <div style={{ width: "50px" }} className="border-bottom border-black"></div>
                <p style={{ lineHeight: "3px" }} className="mb-0 mx-3">
                  Or
                </p>
                <div style={{ width: "50px" }} className="border-bottom border-black"></div>
              </div>
              <Col className="d-flex align-items-center justify-content-center mb-5">
                <div id="goggleBtn" className="mx-auto"></div>
              </Col>
              <p>
                You don't have an account?&nbsp;
                <Link to="/signUp" className="text-decoration-none custom-link  clr-primary fw-bold">
                  <span>Sign Up</span>
                </Link>
              </p>
            </div>
          ) : (
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
              <div className="mb-4 d-flex align-items-end justify-content-center">
                <div style={{ width: "50px" }} className="border-bottom border-black"></div>
                <p style={{ lineHeight: "3px" }} className="mb-0 mx-3">
                  Or
                </p>
                <div style={{ width: "50px" }} className="border-bottom border-black"></div>
              </div>
              <p>
                Already have an account?&nbsp;
                <Link to="/signUp/logIn" className="text-decoration-none custom-link  clr-primary fw-bold">
                  <span>Log In</span>
                </Link>
              </p>
              <Col className="d-flex align-items-center justify-content-center mb-5">
                <div id="goggleBtn" className="mx-auto"></div>
              </Col>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};
export default SignUp;