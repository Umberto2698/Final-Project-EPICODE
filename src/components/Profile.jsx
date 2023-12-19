import { Button, Col, Container, FloatingLabel, Form, InputGroup, Modal, Row, Spinner, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { PhoneFill, EnvelopeFill, HouseDoorFill, GeoAltFill, GearFill, CalendarPlus } from "react-bootstrap-icons";
import Footer from "./Footer";
import Pagination from "./Pagination";
import TableRow from "./TableRow";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  updateMyProfile,
  deleteMyProfile,
  updateImageProfile,
  getMyAppointments,
  getMyAppointmentsByYear,
} from "../redux/actions/profileAction";

const Profile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoadingProfile = useSelector((state) => state.profile.isLoadingProfile);
  const isLoadingAppointments = useSelector((state) => state.profile.isLoadingAppointments);
  const loginState = useSelector((state) => state.login.respLogin);
  const profile = useSelector((state) => state.profile.profile);
  const region = useSelector((state) => {
    if (profile != null) {
      switch (state.profile.profile.region) {
        case "ABRUZZO":
          return "Abruzzo";
        case "BASILICATA":
          return "Basilicata";
        case "CALABRIA":
          return "Calabria";
        case "CAMPANIA":
          return "Campania";
        case "EMILIA_ROMAGNA":
          return "Emilia-Romagna";
        case "FRIULI_VENEZIA_GIULIA":
          return "Friuli-Venezia Giulia";
        case "LAZIO":
          return "Lazio";
        case "LIGURIA":
          return "Liguria";
        case "LOMBARDIA":
          return "Lombardy";
        case "MARCHE":
          return "Marche";
        case "MOLISE":
          return "Molise";
        case "PIEMONTE":
          return "Piedmont";
        case "PUGLIA":
          return "Apulia";
        case "SARDEGNA":
          return "Sardinia";
        case "SICILIA":
          return "Sicily";
        case "TOSCANA":
          return "Tuscany";
        case "TRENTINO_ALTO_ADIGE":
          return "Trentino-South Tyrol";
        case "UMBRIA":
          return "Umbria";
        case "VALLE_DAOSTA":
          return "Aosta Valley";
        case "VENETO":
          return "Veneto";
      }
    }
  });
  const sex = useSelector((state) => {
    if (profile != null) {
      switch (state.profile.profile.sex) {
        case "MALE":
          return "Male";
        case "FEMALE":
          return "Female";
        case "NONE":
          return "---";
      }
    }
  });
  const bloodType = useSelector((state) => {
    if (profile != null) {
      switch (state.profile.profile.bloodtype) {
        case "APLUS":
          return "A+";
        case "AMINUS":
          return "A-";
        case "BPLUS":
          return "B+";
        case "BMINUS":
          return "B-";
        case "ABPLUS":
          return "AB+";
        case "ABMINUS":
          return "AB-";
        case "ZEROPLUS":
          return "0+";
        case "ZEROMINUS":
          return "0-";
        case "NONE":
          return "--";
      }
    }
  });
  const appointments = useSelector((state) => state.profile.appointments);
  const [selectedYear, setSelectedYear] = useState("");
  const [yearArr, setYearArr] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [changedProfile, setChangedProfile] = useState({
    name: "",
    surname: "",
    phone: "",
    streetAddress: "",
    houseNumber: "",
    postalCode: "",
    city: "",
    region: "",
    height: "",
    weight: "",
    bloodType: "",
    birthday: "",
    sex: "",
  });

  const [formData, setFormData] = useState(new FormData());

  const onFileChange = (e) => {
    if (e.target && e.target.files[0]) {
      formData.append("avatar", e.target.files[0]);
      setFormData(formData);
    }
  };

  const [showImage, setShowImage] = useState(false);

  const handleImageClose = () => setShowImage(false);
  const handleImageShow = () => setShowImage(true);

  const [showFirst, setShowFirst] = useState(false);

  const handleFirstClose = () => setShowFirst(false);
  const handleFirstShow = () => setShowFirst(true);

  const [showSecond, setShowSecond] = useState(false);

  const handleSecondClose = () => setShowSecond(false);
  const handleSecondShow = () => setShowSecond(true);

  const [showDelete, setShowDelete] = useState(false);

  const handleCloseDelete = () => setShowDelete(false);
  const handleShowDelete = () => setShowDelete(true);

  const handleMix = () => {
    handleFirstClose();
    handleSecondClose();
    handleShowDelete();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(
      updateMyProfile(
        loginState.authorizationToken.token,
        changedProfile.bloodType,
        changedProfile.sex,
        changedProfile.region,
        changedProfile.name,
        changedProfile.surname,
        changedProfile.phone,
        changedProfile.streetAddress +
          ", " +
          changedProfile.houseNumber +
          " - " +
          changedProfile.postalCode +
          ", " +
          changedProfile.city,
        changedProfile.height,
        changedProfile.weight,
        changedProfile.birthday
      )
    );
    handleFirstClose();
    handleSecondClose();
  };

  const handleProfileDelete = async (e) => {
    e.preventDefault();
    setChangedProfile({
      ...changedProfile,
      name: "",
      surname: "",
      phone: "",
      streetAddress: "",
      houseNumber: "",
      postalCode: "",
      city: "",
      region: "",
      height: "",
      weight: "",
      bloodType: "",
      birthday: "",
      sex: "",
    });
    navigate("/");
    dispatch(deleteMyProfile(loginState.authorizationToken.token));
  };

  const handleImageSubmit = async (e) => {
    e.preventDefault();
    dispatch(updateImageProfile(loginState.authorizationToken.token, formData));
    handleImageClose();
  };

  useEffect(() => {
    let arr = [];
    for (let i = 2010; i <= new Date(Date.now()).getFullYear() + 2; i++) {
      arr.push(i);
    }
    setYearArr(arr);
  }, []);

  useEffect(() => {
    if (profile !== null) {
      if (selectedYear === "") {
        setCurrentPage(1);
        dispatch(getMyAppointments(loginState.authorizationToken.token, currentPage - 1));
      } else {
        setCurrentPage(1);
        dispatch(getMyAppointmentsByYear(loginState.authorizationToken.token, selectedYear, currentPage - 1));
      }
    }
  }, [selectedYear]);

  useEffect(() => {
    if (profile !== null) {
      setChangedProfile({
        ...changedProfile,
        name: profile.name,
        surname: profile.surname,
        phone: profile.phone,
        streetAddress: profile.address.split(",")[0].trim(),
        houseNumber: profile.address.split(",")[1].split("-")[0].trim(),
        postalCode: profile.address.split(",")[1].split("-")[1].trim(),
        city: profile.address.split(",")[2].trim(),
        region: profile.region,
        height: profile.height,
        weight: profile.weight,
        bloodType: profile.bloodtype,
        birthday: profile.birthday,
        sex: profile.sex,
      });
      if (selectedYear === "") {
        dispatch(getMyAppointments(loginState.authorizationToken.token, currentPage - 1));
      } else {
        dispatch(getMyAppointmentsByYear(loginState.authorizationToken.token, selectedYear, currentPage - 1));
      }
    }
  }, [profile, currentPage]);

  return (
    <>
      {loginState.authorizationToken.token === null || loginState.authorizationToken.token === "" ? (
        <div className="d-flex justify-content-center w-100 align-items-center px-1" style={{ height: "94vh" }}>
          <h2 className="fs-4 text-center fw-bold">
            If you don&apos;t have an account yet, click on Sign Up and fill out the form; otherwise, click Log In and
            access your account.
          </h2>
        </div>
      ) : isLoadingProfile ? (
        <div className="d-flex justify-content-center w-100 align-items-center" style={{ height: "94vh" }}>
          <Spinner animation="border" variant="primary" />
        </div>
      ) : (
        <main className="d-flex flex-column justify-content-between" style={{ minHeight: "calc(100vh - 40.6px)" }}>
          <Container fluid="lg" className="pt-5 mb-5 flex-grow-1">
            <Row className="d-none d-sm-flex">
              <Col sm={5} md={4}>
                <div className="d-flex flex-column justify-content-start px-4 py-2 border-accent-l custom-info rounded-5 h-100">
                  <div className="ms-auto mb-2 me-2 mt-1">
                    <GearFill
                      role="button"
                      className="text-dark-emphasis"
                      onClick={handleFirstShow}
                      size={20}
                    ></GearFill>
                  </div>
                  <div className="d-flex flex-column flex-md-row align-items-center  mb-4">
                    <img
                      role="button"
                      onClick={handleImageShow}
                      src={
                        profile.avatarUrl
                          ? profile.avatarUrl
                          : "https://ui-avatars.com/api/?name=" + profile.name + "+" + profile.surname
                      }
                      alt="profile image"
                      className="profile-image mb-1 m-md-0 rounded-circle"
                    />
                    <p className="fw-bold text-center m-0 ms-md-2 fs-5 ff-header">
                      {profile.name + " " + profile.surname}
                    </p>
                  </div>
                  <div>
                    <h2 className="fs-4 fw-bold">Profile Details:</h2>
                    <div className="d-flex align-items-center my-3">
                      <PhoneFill className="text-primary" size={15}></PhoneFill>
                      <p className="custom-fs-6 m-0 ms-2">{profile.phone ? profile.phone : "--- -------"}</p>
                    </div>
                    <div className="d-flex align-items-center my-3">
                      <EnvelopeFill className="text-primary" size={15}></EnvelopeFill>
                      <p className="custom-fs-6 m-0 ms-2">{profile.email}</p>
                    </div>
                    <div className="d-flex align-items-center my-3">
                      <HouseDoorFill className="text-primary" size={15}></HouseDoorFill>
                      <p className="custom-fs-6 m-0 ms-2">
                        {profile.address === null || profile.address === ",  - , " ? "--------------" : profile.address}
                      </p>
                    </div>
                    <div className="d-flex align-items-center my-3">
                      <GeoAltFill className="text-primary" size={15}></GeoAltFill>
                      <p className="custom-fs-6 m-0 ms-2">{region}</p>
                    </div>
                  </div>
                </div>
              </Col>
              <Col sm={7} md={8}>
                <div className="d-flex flex-column justify-content-start px-4 py-2 border-accent-l custom-info rounded-5 h-100">
                  <div className="d-flex align-items-center justify-content-between mb-2 mt-1 ">
                    <h2 className="fs-4 fw-bold m-0 ms-2">Overview:</h2>
                    <GearFill
                      role="button"
                      className="text-dark-emphasis me-2"
                      size={20}
                      onClick={handleSecondShow}
                    ></GearFill>
                  </div>
                  <Row className="row-cols-2 row-cols-md-3 h-100">
                    <Col className="my-3 d-flex flex-column justify-content-center ">
                      <h3 className="fw-bold ms-2  mb-1 mt-2 fs-5">Sex:</h3>
                      <p className="custom-fs-6 ms-2 m-0">{sex}</p>
                    </Col>
                    <Col className="my-3 d-flex flex-column justify-content-center ">
                      <h3 className="fw-bold ms-2 mb-1 mt-2 fs-5">Date of Birth:</h3>
                      <p className="custom-fs-6 ms-2 m-0">{profile.birthday ? profile.birthday : "dd/MM/aaaa"}</p>
                    </Col>
                    <Col className="my-3 d-flex flex-column justify-content-center ">
                      <h3 className="fw-bold ms-2 mb-1 mt-2 fs-5">Blood Type:</h3>
                      <p className="custom-fs-6 ms-2 m-0">{bloodType}</p>
                    </Col>
                    <Col className="my-3 d-flex flex-column justify-content-center ">
                      <h3 className="fw-bold ms-2 mb-1 mt-2 fs-5">Height:</h3>
                      <p className="custom-fs-6 ms-2 m-0">{profile.height !== 0 ? profile.height : "- -- m"}</p>
                    </Col>
                    <Col className="my-3 d-flex flex-column justify-content-center ">
                      <h3 className="fw-bold ms-2 mb-1 mt-2 fs-5">Last Donation Date:</h3>
                      <p className="custom-fs-6 ms-2 m-0">
                        {isLoadingAppointments
                          ? "dd/MM/aaaa"
                          : appointments.content.length === 0
                          ? "dd/MM/aaaa"
                          : appointments.content[0].donationDate}
                      </p>
                    </Col>
                    <Col className="my-3 d-flex flex-column justify-content-center ">
                      <h3 className="fw-bold ms-2 mb-1 mt-2 fs-5">Weight:</h3>
                      <p className="custom-fs-6 ms-2 m-0">{profile.weight !== 0 ? profile.weight : "-- -- kg"}</p>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
            <Row className="d-flex d-sm-none">
              <Col>
                <div className="d-flex flex-column justify-content-start px-4 py-2 border-accent-l custom-info rounded-5 h-100">
                  <div className="ms-auto mb-2 me-2 mt-1">
                    <GearFill role="button" className="text-dark-emphasis" size={20}></GearFill>
                  </div>
                  <div className="d-flex flex-column flex-md-row align-items-center mb-4">
                    <img
                      src={profile.avatarUrl}
                      alt="profile image"
                      className="profile-image mb-1 m-md-0 rounded-circle"
                    />
                    <p className="fw-bold m-0 fs-5 ff-header">{profile.name + " " + profile.surname}</p>
                  </div>
                  <div>
                    <h2 className="fs-4 fw-bold">Profile Details:</h2>
                    <div className="d-flex align-items-center my-3">
                      <PhoneFill className="text-primary" size={15}></PhoneFill>
                      <p className="custom-fs-6 m-0 ms-2">{profile.phone ? profile.phone : "--- -------"}</p>
                    </div>
                    <div className="d-flex align-items-center my-3">
                      <EnvelopeFill className="text-primary" size={15}></EnvelopeFill>
                      <p className="custom-fs-6 m-0 ms-2">{profile.email}</p>
                    </div>
                    <div className="d-flex align-items-center my-3">
                      <HouseDoorFill className="text-primary" size={15}></HouseDoorFill>
                      <p className="custom-fs-6 m-0 ms-2">
                        {profile.address === null || profile.address === ",  - , " ? "--------------" : profile.address}
                      </p>
                    </div>
                    <div className="d-flex align-items-center my-3">
                      <GeoAltFill className="text-primary" size={15}></GeoAltFill>
                      <p className="custom-fs-6 m-0 ms-2">{region}</p>
                    </div>
                  </div>
                  <Row className=" row-cols-2 h-100">
                    <Col className="my-3 ">
                      <h3 className="fw-bold mb-1 mt-2 fs-5">Sex:</h3>
                      <p className="custom-fs-6 m-0">{sex}</p>
                    </Col>
                    <Col className="my-3 ">
                      <h3 className="fw-bold mb-1 mt-2 fs-5">Date of Birth:</h3>
                      <p className="custom-fs-6 m-0">{profile.birthday ? profile.birthday : "dd/MM/aaaa"}</p>
                    </Col>
                    <Col className="my-3 ">
                      <h3 className="fw-bold mb-1 mt-2 fs-5">Blood Type:</h3>
                      <p className="custom-fs-6 m-0">{bloodType}</p>
                    </Col>
                    <Col className="my-3 ">
                      <h3 className="fw-bold mb-1 mt-2 fs-5">Height:</h3>
                      <p className="custom-fs-6 m-0">{profile.height !== 0 ? profile.height : "- -- m"}</p>
                    </Col>
                    <Col className="my-3 ">
                      <h3 className="fw-bold mb-1 mt-2 fs-5">Last Donation Date:</h3>
                      <p className="custom-fs-6 m-0">
                        {isLoadingAppointments
                          ? "dd/MM/aaaa"
                          : appointments.content.length === 0
                          ? "dd/MM/aaaa"
                          : appointments.content[0].donationDate}
                      </p>
                    </Col>
                    <Col className="my-3 ">
                      <h3 className="fw-bold mb-1 mt-2 fs-5">Weight:</h3>
                      <p className="custom-fs-6 m-0">{profile.weight !== 0 ? profile.weight : "-- kg"}</p>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
            <Row className="mt-4">
              <Col>
                <div className=" d-flex flex-column justify-content-start px-4 py-2 border-accent-l custom-info rounded-5 h-100">
                  <div className="d-flex flex-column flex-sm-row align-items-center justify-content-between mt-1 mb-3">
                    <h2 className="fs-4 fw-bold mb-3 mb-md-0  m-sm-0">Appointments:</h2>
                    <div className="d-flex align-items-center justify-content-between justify-content-sm-end w-100">
                      <div className="d-flex align-items-center justify-content-between justify-content-sm-end w-100">
                        <div className="d-flex align-items-center me-3">
                          <Form>
                            <FloatingLabel
                              controlId="floatingYear1"
                              label="Filter by year:"
                              className="clr-secondary border-secondary rounded-4 fw-bold fs-6"
                            >
                              <Form.Select
                                className="rounded-4 custom-input fs-6"
                                onChange={(e) => setSelectedYear(e.target.value)}
                                aria-label="year selector"
                              >
                                <option value="" className="text-primary fw-bold">
                                  Choose a year
                                </option>
                                <option value="">No filter</option>
                                {yearArr.map((year) => (
                                  <option key={year} value={year}>
                                    {year}
                                  </option>
                                ))}
                              </Form.Select>
                            </FloatingLabel>
                          </Form>
                        </div>
                        <Button
                          id="profile-btn"
                          className="text-white d-none d-md-block custom-bg-button border-button rounded-4 py-2"
                        >
                          <Link to="/appointment" className="text-decoration-none text-white">
                            Book Appointment
                          </Link>
                        </Button>
                        <Button
                          id="profile-btn"
                          className="text-white d-flex justify-content-center d-md-none custom-bg-button border-button rounded-4"
                        >
                          <Link to="/appointment" className="text-decoration-none text-white">
                            <CalendarPlus size={20}></CalendarPlus>
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                  {isLoadingAppointments ? (
                    <>
                      <p className="card-text placeholder-wave mb-1">
                        <span className="placeholder col-12"></span>
                      </p>
                      <p className="card-text mb-2 placeholder-wave">
                        <span className="placeholder bg-primary col-12"></span>
                        <span className="placeholder bg-primary col-12"></span>
                        <span className="placeholder bg-primary col-12"></span>
                      </p>
                    </>
                  ) : appointments.content.length === 0 ? (
                    <div className="d-flex flex-column flex-sm-row align-items-center justify-content-center mb-2">
                      <h2 className="fs-4 text-center fw-bold m-0">You don&apos;t have an appointment yet</h2>
                    </div>
                  ) : (
                    <>
                      <Table hover striped responsive borderless>
                        <thead id="custom-table-head">
                          <tr>
                            <th className="custom-fs-6 text-nowrap">Center Address</th>
                            <th className="custom-fs-6 text-nowrap">CAP</th>
                            <th className="custom-fs-6 text-nowrap">City</th>
                            <th className="custom-fs-6 text-nowrap">Check-in</th>
                            <th className="custom-fs-6 text-nowrap">Date</th>
                          </tr>
                        </thead>
                        <tbody>
                          {appointments.content.map((donation) => (
                            <TableRow
                              key={donation.id}
                              id={donation.id}
                              address={donation.center.address}
                              cap={donation.center.cap}
                              city={donation.center.municipality}
                              abbreviation={donation.center.provinceAbbreviation}
                              check={donation.check}
                              date={donation.donationDate}
                            ></TableRow>
                          ))}
                        </tbody>
                      </Table>
                      <Pagination
                        className="pagination-bar"
                        currentPage={currentPage}
                        totalCount={appointments.totalElements}
                        pageSize={appointments.size}
                        onPageChange={(page) => setCurrentPage(page)}
                      ></Pagination>
                    </>
                  )}
                </div>
              </Col>
            </Row>
          </Container>
          <Modal show={showFirst} onHide={handleFirstClose}>
            <Modal.Header closeButton>
              <Modal.Title className="fs-4 fw-bold mb-0">Profile Details</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form onSubmit={handleSubmit}>
                <FloatingLabel
                  controlId="floatingName"
                  label="Name"
                  className="mb-4 clr-secondary border-secondary rounded-4 fw-bold fs-6"
                >
                  <Form.Control
                    value={changedProfile.name ? changedProfile.name : ""}
                    onChange={(e) => setChangedProfile({ ...changedProfile, name: e.target.value })}
                    type="text"
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
                    value={changedProfile.surname ? changedProfile.surname : ""}
                    onChange={(e) => setChangedProfile({ ...changedProfile, surname: e.target.value })}
                    type="text"
                    placeholder="surname"
                    className="rounded-4 custom-input fs-5"
                  />
                </FloatingLabel>
                <FloatingLabel
                  controlId="floatingPhone"
                  label="Phone"
                  className="mb-4 clr-secondary border-secondary rounded-4 fw-bold fs-6"
                >
                  <Form.Control
                    value={changedProfile.phone ? changedProfile.phone : ""}
                    onChange={(e) => setChangedProfile({ ...changedProfile, phone: e.target.value })}
                    type="tel"
                    placeholder="phone"
                    className="rounded-4 custom-input fs-5"
                  />
                </FloatingLabel>
                <FloatingLabel
                  controlId="floatingStreetAddress"
                  label="Street address"
                  className="mb-4 clr-secondary border-secondary rounded-4 fw-bold fs-6"
                >
                  <Form.Control
                    value={changedProfile.streetAddress ? changedProfile.streetAddress : ""}
                    onChange={(e) => setChangedProfile({ ...changedProfile, streetAddress: e.target.value })}
                    type="text"
                    required
                    placeholder="street address"
                    className="rounded-4 custom-input fs-5"
                  />
                </FloatingLabel>
                <FloatingLabel
                  controlId="floatingHouseNumber"
                  label="House number"
                  className="mb-4 clr-secondary border-secondary rounded-4 fw-bold fs-6"
                >
                  <Form.Control
                    value={changedProfile.houseNumber ? changedProfile.houseNumber : ""}
                    onChange={(e) => setChangedProfile({ ...changedProfile, houseNumber: e.target.value })}
                    type="number"
                    required
                    placeholder="house number"
                    className="rounded-4 custom-input fs-5"
                  />
                </FloatingLabel>
                <FloatingLabel
                  controlId="floatingPostalCode"
                  label="Postal Code"
                  className="mb-4 clr-secondary border-secondary rounded-4 fw-bold fs-6"
                >
                  <Form.Control
                    value={changedProfile.postalCode ? changedProfile.postalCode : ""}
                    onChange={(e) => setChangedProfile({ ...changedProfile, postalCode: e.target.value })}
                    autoComplete="postal-code"
                    required
                    placeholder="postal code"
                    className="rounded-4 custom-input fs-5"
                  />
                </FloatingLabel>
                <FloatingLabel
                  controlId="floatingCity"
                  label="City"
                  className="mb-4 clr-secondary border-secondary rounded-4 fw-bold fs-6"
                >
                  <Form.Control
                    value={changedProfile.city ? changedProfile.city : ""}
                    onChange={(e) => setChangedProfile({ ...changedProfile, city: e.target.value })}
                    autoComplete="address-level2"
                    type="text"
                    required
                    placeholder="city"
                    className="rounded-4 custom-input fs-5"
                  />
                </FloatingLabel>
                <FloatingLabel
                  controlId="floatingSelectGrid"
                  label="Region"
                  className="clr-secondary border-secondary rounded-4 fw-bold fs-6"
                >
                  <Form.Select
                    required
                    size="5"
                    className="rounded-4 custom-input fs-6"
                    onChange={(e) => setChangedProfile({ ...changedProfile, region: e.target.value })}
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
                <div className="mt-4 d-flex align-items-center justify-content-between">
                  <Button variant="danger" onClick={handleMix}>
                    Delete Profile
                  </Button>
                  <Button variant="primary" type="submit">
                    Save Changes
                  </Button>
                </div>
              </Form>
            </Modal.Body>
          </Modal>
          <Modal show={showSecond} onHide={handleSecondClose}>
            <Modal.Header closeButton>
              <Modal.Title className="fs-4 fw-bold mb-0">Profile Details</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form onSubmit={handleSubmit}>
                <FloatingLabel
                  controlId="floatingSex"
                  label="Sex"
                  className="mb-4 clr-secondary border-secondary rounded-4 fw-bold fs-6"
                >
                  <Form.Select
                    required
                    size="5"
                    className="rounded-4 custom-input fs-6"
                    onChange={(e) => setChangedProfile({ ...changedProfile, sex: e.target.value })}
                    aria-label="sex selector"
                  >
                    <option value="" className="text-primary fw-bold">
                      Choose your biological sex
                    </option>
                    <option value="MALE">Male</option>
                    <option value="FEMALE">Female</option>
                    <option value="NONE">---</option>
                  </Form.Select>
                </FloatingLabel>
                <FloatingLabel
                  controlId="floatingBirthday"
                  label="Date of Birth"
                  className="mb-4 clr-secondary border-secondary rounded-4 fw-bold fs-6"
                >
                  <Form.Control
                    value={
                      changedProfile.birthday !== null
                        ? changedProfile.birthday.includes("/")
                          ? changedProfile.birthday.split("/")[2] +
                            "-" +
                            changedProfile.birthday.split("/")[1] +
                            "-" +
                            changedProfile.birthday.split("/")[0]
                          : changedProfile.birthday.includes("-")
                          ? changedProfile.birthday
                          : ""
                        : ""
                    }
                    onChange={(e) => setChangedProfile({ ...changedProfile, birthday: e.target.value })}
                    type="date"
                    max={`${new Date(Date.now()).getFullYear() - 18}-${new Date(Date.now()).getMonth() + 1}-${new Date(
                      Date.now()
                    ).getDate()}`}
                    placeholder="birthday"
                    className="rounded-4 custom-input fs-5"
                  />
                </FloatingLabel>
                <FloatingLabel
                  controlId="floatingBloodType"
                  label="Blood Type"
                  className="mb-4 clr-secondary border-secondary rounded-4 fw-bold fs-6"
                >
                  <Form.Select
                    required
                    size="5"
                    className="rounded-4 custom-input fs-6"
                    onChange={(e) => setChangedProfile({ ...changedProfile, bloodType: e.target.value })}
                    aria-label="blood type selector"
                  >
                    <option value="" className="text-primary fw-bold">
                      Choose your blood type
                    </option>
                    <option value="APLUS">A+</option>
                    <option value="AMINUS">A-</option>
                    <option value="BPLUS">B+</option>
                    <option value="BMINUS">B-</option>
                    <option value="ABPLUS">AB+</option>
                    <option value="ABMINUS">AB-</option>
                    <option value="ZEROPLUS">0+</option>
                    <option value="ZEROMINUS">0-</option>
                    <option value="NONE">--</option>
                  </Form.Select>
                </FloatingLabel>
                <FloatingLabel
                  controlId="floatingHeight"
                  label="Height (cm)"
                  className="mb-4 clr-secondary border-secondary rounded-4 fw-bold fs-6"
                >
                  <Form.Control
                    value={changedProfile.height ? changedProfile.height : ""}
                    onChange={(e) => setChangedProfile({ ...changedProfile, height: e.target.value })}
                    type="number"
                    placeholder="height"
                    className="rounded-4 custom-input fs-5"
                  />
                </FloatingLabel>
                <FloatingLabel
                  controlId="floatingWeight"
                  label="Weight (g)"
                  className="mb-4 clr-secondary border-secondary rounded-4 fw-bold fs-6"
                >
                  <Form.Control
                    value={changedProfile.weight ? changedProfile.weight : ""}
                    onChange={(e) => setChangedProfile({ ...changedProfile, weight: e.target.value })}
                    type="number"
                    placeholder="weight"
                    className="rounded-4 custom-input fs-5"
                  />
                </FloatingLabel>

                <div className="mt-4 d-flex align-items-center justify-content-between">
                  <Button variant="danger" onClick={handleMix}>
                    Delete Profile
                  </Button>
                  <Button variant="primary" type="submit">
                    Save Changes
                  </Button>
                </div>
              </Form>
            </Modal.Body>
          </Modal>
          <Modal show={showDelete} onHide={handleCloseDelete}>
            <Modal.Header closeButton>
              <Modal.Title className="text-danger fw-bold m-0">Danger Zone!!!</Modal.Title>
            </Modal.Header>
            <Modal.Body className="fw-bold">Are you sure you want to permanently delete your profile?</Modal.Body>
            <Modal.Footer className="justify-content-center">
              <Button variant="danger" onClick={handleProfileDelete}>
                Delete
              </Button>
            </Modal.Footer>
          </Modal>
          <Modal show={showImage} onHide={handleImageClose}>
            <Modal.Header closeButton>
              <Modal.Title className="fs-4 fw-bold mb-0">Profile Picture</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="d-flex align-items-center justify-content-center">
                <img
                  src={profile.avatarUrl}
                  alt="profile image"
                  className="rounded-circle w-50 object-fit-cover"
                  style={{ aspectRatio: 1 / 1 }}
                />
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Form className="w-100" onSubmit={handleImageSubmit}>
                <InputGroup className="mb-4 clr-secondary border-secondary rounded-4 fw-bold fs-6">
                  <Form.Control
                    type="file"
                    required
                    placeholder="choose file"
                    onChange={(e) => onFileChange(e)}
                    className="rounded-4 custom-input fs-5"
                  />
                </InputGroup>
                <div className="mt-4 d-flex align-items-center justify-content-between">
                  <Button variant="secondary" onClick={handleImageClose}>
                    Close
                  </Button>
                  <Button variant="primary" type="submit">
                    Update Profile Picture
                  </Button>
                </div>
              </Form>
            </Modal.Footer>
          </Modal>
          <footer className="custom-bg-accent-l d-flex justify-content-center align-items-center">
            <Footer></Footer>
          </footer>
        </main>
      )}
    </>
  );
};
export default Profile;
