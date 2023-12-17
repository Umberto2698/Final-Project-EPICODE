/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import { Button, Col, FloatingLabel, Form, Alert } from "react-bootstrap";
import { Eye, EyeSlash } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import {
  fetchRegister,
  fetchLogin,
  LOGIN_ERROR,
  REGISTER_ERROR,
  REGISTER_SUCCESS,
} from "../redux/actions/loginActions";

const SignUp = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const token = useSelector((state) => state.login.respLogin.authorizationToken.token);
  const errorRegisterMessage = useSelector((state) => state.state.error.content);
  const errorLoginMessage = useSelector((state) => state.state.error.content);
  const successRegisterMessage = useSelector((state) => state.state.success.content);

  const [passwordStyle, setPasswordStyle] = useState({
    type: "password",
  });

  const handleCallbackResponse = (response) => {
    const userObject = jwtDecode(response.credential);
    setNewProfile({ name: userObject.given_name, surname: userObject.family_name, email: userObject.email });
    setOldProfile({ email: userObject.email });
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
    setNewProfile({ ...newProfile, name: "", surname: "", region: "", email: "", password: "" });
    setOldProfile({ ...oldProfile, email: "", password: "" });
    setPasswordStyle({ ...passwordStyle, type: "password" });
    if (errorRegisterMessage !== "") {
      dispatch({ type: REGISTER_ERROR, payload: "" });
    }
    if (errorLoginMessage !== "") {
      dispatch({ type: LOGIN_ERROR, payload: "" });
    }
    if (successRegisterMessage !== "") {
      dispatch({ type: REGISTER_SUCCESS, payload: "" });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  useEffect(() => {
    if (token !== null && token !== "") {
      navigate("/");
    }
  }, [token]);

  const [newProfile, setNewProfile] = useState({
    name: "",
    surname: "",
    region: "",
    email: "",
    password: "",
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
      dispatch(
        fetchRegister(newProfile.name, newProfile.surname, newProfile.region, newProfile.email, newProfile.password)
      );
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
              src={`${location.pathname.includes("logIn") ? "../assets/Sign-up2.png" : "assets/Sign-up2.png"}`}
              alt="Image of a patient donating blood while doctor check on her, both smiling."
            />
          </div>
        </div>
        <div className="g-col-12 g-col-md-6 d-flex align-items-center justify-content-center">
          {location.pathname.includes("/logIn") ? (
            <div className="text-black custom-w-3">
              {errorLoginMessage.length !== 0 && (
                <Alert className="mt-2" variant="danger" dismissible>
                  <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
                  <p className="m-0">{errorLoginMessage}</p>
                </Alert>
              )}
              <h2 className="fw-bold custom-fs-1 mb-3">Log In</h2>
              <p className="fs-3">Enter credentials</p>
              <Form id="form" onSubmit={handleSubmit}>
                <FloatingLabel
                  controlId="floatingEmailLogIn"
                  label="Email"
                  className="mb-4 clr-secondary border-secondary rounded-4 fw-bold fs-6"
                >
                  <Form.Control
                    value={oldProfile.email}
                    onChange={(e) => setOldProfile({ ...oldProfile, email: e.target.value })}
                    type="email"
                    required
                    placeholder="name@example.com"
                    className="rounded-4 custom-input fs-5"
                  />
                </FloatingLabel>
                <FloatingLabel
                  controlId="floatingPasswordLogIn"
                  label="Password"
                  className="mb-4 user-select-none clr-secondary border-secondary rounded-4 fw-bold fs-6"
                >
                  <Form.Control
                    value={oldProfile.password}
                    onChange={(e) => setOldProfile({ ...oldProfile, password: e.target.value })}
                    type={passwordStyle.type}
                    placeholder="password"
                    required
                    className="rounded-4 custom-input fs-5"
                  />
                  {passwordStyle.type === "password" ? (
                    <Eye
                      role="button"
                      onClick={() => setPasswordStyle({ ...passwordStyle, type: "text" })}
                      className="text-black position-absolute"
                      size={20}
                    ></Eye>
                  ) : (
                    <EyeSlash
                      role="button"
                      onClick={() => setPasswordStyle({ ...passwordStyle, type: "password" })}
                      className="text-black position-absolute"
                      size={20}
                    ></EyeSlash>
                  )}
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
                  <span className="text-nowrap">Sign Up</span>
                </Link>
              </p>
            </div>
          ) : (
            <div className="text-black custom-w-3">
              {errorRegisterMessage.length !== 0 && (
                <Alert className="mt-2" variant="danger" dismissible>
                  <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
                  <p className="m-0">{errorRegisterMessage}</p>
                </Alert>
              )}
              {successRegisterMessage.length !== 0 && (
                <Alert className="mt-2" variant="success" dismissible>
                  <Alert.Heading>Registration was successful!</Alert.Heading>
                  <p className="m-0">{successRegisterMessage}</p>
                </Alert>
              )}
              <h2 className="fw-bold custom-fs-1 mb-3">Sign Up</h2>
              <p className="fs-3">Create Account</p>
              <Form id="form" onSubmit={handleSubmit}>
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
                  controlId="floatingSelectGrid"
                  label="Region"
                  className="mb-4 clr-secondary border-secondary rounded-4 fw-bold fs-6"
                >
                  <Form.Select
                    required
                    size="5"
                    className="rounded-4 custom-input fs-6"
                    onChange={(e) => setNewProfile({ ...newProfile, region: e.target.value })}
                    aria-label="region selector"
                  >
                    <option value="" className="text-primary fw-bold">
                      Choose a Region
                    </option>
                    <option value="ABRUZZO">Abruzzo</option>
                    <option value="BASILICATA">Basilicata</option>
                    <option value="CALABRIA">Calabria</option>
                    <option value="CAMPANIA">Campania</option>
                    <option value="EMILIA_ROMAGNA">Emilia-Romagna</option>
                    <option value="FRIULI_VENEZIA_GIULIA">Friuli-Venezia Giulia</option>
                    <option value="LAZIO">Lazio</option>
                    <option value="LIGURIA">Liguria</option>
                    <option value="LOMBARDIA">Lombardy</option>
                    <option value="MARCHE">Marche</option>
                    <option value="MOLISE">Molise</option>
                    <option value="PIEMONTE">Piedmont</option>
                    <option value="PUGLIA">Apulia</option>
                    <option value="SARDEGNA">Sardinia</option>
                    <option value="SICILIA">Sicily</option>
                    <option value="TOSCANA">Tuscany</option>
                    <option value="TRENTINO_ALTO_ADIGE">Trentino-South Tyrol</option>
                    <option value="UMBRIA">Umbria</option>
                    <option value="VALLE_DAOSTA">Aosta Valley</option>
                    <option value="VENETO">Veneto</option>
                  </Form.Select>
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
                  className="mb-4 user-select-none position-relative clr-secondary border-secondary rounded-4 fw-bold fs-6"
                >
                  <Form.Control
                    value={newProfile.password}
                    onChange={(e) => setNewProfile({ ...newProfile, password: e.target.value })}
                    type={passwordStyle.type}
                    placeholder="password"
                    required
                    className="rounded-4 custom-input fs-5"
                  />
                  {passwordStyle.type === "password" ? (
                    <Eye
                      role="button"
                      onClick={() => setPasswordStyle({ ...passwordStyle, type: "text" })}
                      className="text-black position-absolute"
                      size={20}
                    ></Eye>
                  ) : (
                    <EyeSlash
                      role="button"
                      onClick={() => setPasswordStyle({ ...passwordStyle, type: "password" })}
                      className="text-black position-absolute"
                      size={20}
                    ></EyeSlash>
                  )}
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
