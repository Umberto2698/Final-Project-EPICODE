import { useDispatch, useSelector } from "react-redux";
import Footer from "./Footer";
import { Container, Spinner } from "react-bootstrap";
import { useEffect } from "react";
import { getDonationCenters } from "../redux/actions/donationCenterAction.js";
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

  return (
    <main>
      {loginState.authorizationToken.token === null || loginState.authorizationToken.token === "" ? (
        <div className="d-flex justify-content-center w-100 align-items-center px-1" style={{ height: "94vh" }}>
          <h2 className="fs-4 text-center fw-bold">
            If you don't have an account yet, click on Sign Up and fill out the form; otherwise, click Log In and access
            your account.
          </h2>
        </div>
      ) : isLoadingCenters ? (
        <div className="d-flex justify-content-center w-100 align-items-center" style={{ height: "94vh" }}>
          <Spinner animation="border" variant="primary" />
        </div>
      ) : (
        <Container>
          <footer className="custom-bg-accent-l d-flex justify-content-center align-items-center d-md-none">
            <Footer></Footer>
          </footer>
        </Container>
      )}
    </main>
  );
};
export default Appointment;
