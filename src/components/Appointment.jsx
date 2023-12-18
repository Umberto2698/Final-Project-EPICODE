import { useDispatch, useSelector } from "react-redux";
import Footer from "./Footer";
import { Alert, Col, Container, FloatingLabel, Form, Row, Spinner } from "react-bootstrap";
import { useEffect, useState } from "react";
import { getDonationCenters } from "../redux/actions/donationCenterAction.js";
import CenterCard from "./CenterCard.jsx";
const Appointment = () => {
  const dispatch = useDispatch();
  const loginState = useSelector((state) => state.login.respLogin);
  const isLoadingCenters = useSelector((state) => state.centers.loading.content);
  const profile = useSelector((state) => state.profile.profile);
  const region = useSelector((state) => {
    if (profile !== null) {
      return state.profile.profile.region;
    }
  });
  const donationCenters = useSelector((state) => state.centers.centers.content);

  useEffect(() => {
    if (
      loginState.authorizationToken.token !== null &&
      loginState.authorizationToken.token !== "" &&
      profile !== null
    ) {
      dispatch(getDonationCenters(loginState.authorizationToken.token, region));
    }
  }, [profile]);

  const handleRegionChange = async (e) => {
    e.preventDefault();
    dispatch(getDonationCenters(loginState.authorizationToken.token, e.target.value));
  };

  return (
    <>
      {loginState.authorizationToken.token === null || loginState.authorizationToken.token === "" ? (
        <div className="d-flex justify-content-center w-100 align-items-center px-1" style={{ height: "94vh" }}>
          <h2 className="fs-4 text-center fw-bold">
            If you don't have an account yet, click on Sign Up and fill out the form; otherwise, click Log In and access
            your account.
          </h2>
        </div>
      ) : (
        <main
          className="d-flex flex-column justify-content-between linear-gradient-acc-100"
          style={{ minHeight: "calc(100vh - 40.6px)" }}
        >
          <Container className="mb-3 pt-4">
            <section className="mb-4">
              <Row>
                <Col>
                  <h2 className="fs-2 fw-bold">Total donations:</h2>
                  <p>
                    Thank you so much to everyone who has donated their precious blood at our centers! Your generous
                    gesture has made a significant impact on the lives of those in need.
                  </p>
                  <p>
                    Each donation is an act of compassion that contributes to building a stronger and more supportive
                    community. We are grateful for your commitment and encourage you to continue spreading this chain of
                    kindness by inviting others to join us in donating blood. Every drop counts, and together we can
                    make a difference.
                  </p>
                  <p>Thank you for being a part of this important mission!</p>
                  <p>
                    With gratitude, <strong>BloodItaly</strong>.
                  </p>
                </Col>
              </Row>
            </section>
            <section>
              <h1 className="fw-bold mb-3 mb-md-2">Book an appointment</h1>
              <div className="d-md-flex align-items-center mb-3">
                <h4 className="fs-4 me-2 mb-2 mb-md-0">
                  Choose a center in your region or view other options with the appropriate button:
                </h4>
                <Col className="col-md-4">
                  <Form>
                    <FloatingLabel
                      controlId="floatingSelectGrid"
                      label="Region"
                      className="clr-secondary border-secondary rounded-4 fw-bold fs-6"
                    >
                      <Form.Select
                        required
                        size="5"
                        className="rounded-4 custom-input fs-6"
                        onChange={(e) => handleRegionChange(e)}
                        aria-label="region selector"
                      >
                        <option value={region} className="text-primary fw-bold">
                          My region
                        </option>
                        <option value="ABRUZZO">Abruzzo</option>
                        <option value="BASILICATA">Basilicata</option>
                        <option value="CALABRIA">Calabria</option>
                        <option value="CAMPANIA">Campania</option>
                        <option value="EMILIA_ROMAGNA">Emilia-Romagna</option>
                        <option value="FRIULI_VENEZIA_GIULIA">Friuli-Venezia-Giulia</option>
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
                  </Form>
                </Col>
              </div>
              {isLoadingCenters ? (
                <div className="d-flex justify-content-center w-100 align-items-center" style={{ height: "94vh" }}>
                  <Spinner animation="border" variant="primary" />
                </div>
              ) : (
                <Row className="row-cols-1 row-cols-sm-2 row-cols-md-3 row-gap-4">
                  {donationCenters.map((center) => {
                    return (
                      <Col key={center.id}>
                        <CenterCard
                          className="card"
                          token={loginState.authorizationToken.token}
                          id={center.id}
                          address={center.address}
                          municipality={center.municipality}
                          cap={center.cap}
                          municipalityAbbr={center.provinceAbbreviation}
                          denomination={center.denomination}
                        ></CenterCard>
                      </Col>
                    );
                  })}
                </Row>
              )}
            </section>
          </Container>
          <footer className="custom-bg-accent-l d-flex justify-content-center align-items-center">
            <Footer></Footer>
          </footer>
        </main>
      )}
    </>
  );
};
export default Appointment;
