import { Button, Col, Container, Row, Spinner, Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import { PhoneFill, EnvelopeFill, HouseDoorFill, ThreeDots, CalendarPlus } from "react-bootstrap-icons";
import Footer from "./Footer";
import Pagination from "./Pagination";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const isLoadingProfile = useSelector((state) => state.profile.isLoadingProfile);
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();
  let PageSize = 10;
  return (
    <>
      {!isLoadingProfile ? (
        <div className="d-flex justify-content-center w-100 align-items-center" style={{ height: "100vh" }}>
          <Spinner animation="border" variant="primary" />
        </div>
      ) : (
        <main className="d-flex flex-column justify-content-between" style={{ minHeight: "calc(100vh - 49.6px)" }}>
          <Container fluid="lg" className="pt-5 mb-5 flex-grow-1">
            <Row className="d-none d-sm-flex">
              <Col sm={5} md={4}>
                <div className="d-flex flex-column justify-content-start px-4 py-2 border-primary-l rounded-5 h-100">
                  <div className="ms-auto mb-2 me-2 mt-1">
                    <ThreeDots role="button" className="text-dark-emphasis" size={20}></ThreeDots>
                  </div>
                  <div className="d-flex flex-column flex-md-row align-items-center mb-4">
                    <img
                      src="https://ui-avatars.com/api/?name=Umberto+Zappulla"
                      alt="profile image"
                      className="profile-image mb-1 m-md-0 rounded-circle"
                    />
                    <p className="fw-bold m-0 ms-2 fs-5 ff-header">Name Surname</p>
                  </div>
                  <div>
                    <h2 className="fs-4 fw-bold">Contact Details:</h2>
                    <div className="d-flex align-items-center my-3">
                      <PhoneFill className="text-info" size={15}></PhoneFill>
                      <p className="custom-fs-6 m-0 ms-2">9804392032</p>
                    </div>
                    <div className="d-flex align-items-center my-3">
                      <EnvelopeFill className="text-info" size={15}></EnvelopeFill>
                      <p className="custom-fs-6 m-0 ms-2">name@example.com</p>
                    </div>
                    <div className="d-flex align-items-center my-3">
                      <HouseDoorFill className="text-info" size={15}></HouseDoorFill>
                      <p className="custom-fs-6 m-0 ms-2">adress, London 10121</p>
                    </div>
                  </div>
                </div>
              </Col>
              <Col sm={7} md={8}>
                <div className="d-flex flex-column justify-content-start px-4 py-2 border-primary-l rounded-5 h-100">
                  <div className="d-flex align-items-center justify-content-between mb-2 mt-1 ">
                    <h2 className="fs-4 fw-bold m-0">Overview:</h2>
                    <ThreeDots role="button" className="text-dark-emphasis me-2" size={20}></ThreeDots>
                  </div>
                  <Row className="row-cols-2 row-cols-md-3 h-100">
                    <Col className="my-3">
                      <h3 className="fw-bold mb-1 mt-2 fs-5">Sex:</h3>
                      <p className="custom-fs-6 m-0">Female</p>
                    </Col>
                    <Col className="my-3">
                      <h3 className="fw-bold mb-1 mt-2 fs-5">Date of Birth:</h3>
                      <p className="custom-fs-6 m-0">10/03/1987</p>
                    </Col>
                    <Col className="my-3">
                      <h3 className="fw-bold mb-1 mt-2 fs-5">Blood Type:</h3>
                      <p className="custom-fs-6 m-0">A+</p>
                    </Col>
                    <Col className="my-3">
                      <h3 className="fw-bold mb-1 mt-2 fs-5">Height:</h3>
                      <p className="custom-fs-6 m-0">1.75 m</p>
                    </Col>
                    <Col className="my-3">
                      <h3 className="fw-bold mb-1 mt-2 fs-5">Last Donation Date:</h3>
                      <p className="custom-fs-6 m-0">27/02/2022</p>
                    </Col>
                    <Col className="my-3">
                      <h3 className="fw-bold mb-1 mt-2 fs-5">Weight:</h3>
                      <p className="custom-fs-6 m-0">78 kg</p>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
            <Row className="d-flex d-sm-none">
              <Col>
                <div className="d-flex flex-column justify-content-start px-4 py-2 border-primary-l rounded-5 h-100">
                  <div className="ms-auto mb-2 me-2 mt-1">
                    <ThreeDots role="button" className="text-dark-emphasis" size={20}></ThreeDots>
                  </div>
                  <div className="d-flex flex-column flex-md-row align-items-center mb-4">
                    <img
                      src="https://ui-avatars.com/api/?name=Umberto+Zappulla"
                      alt="profile image"
                      className="profile-image mb-1 m-md-0 rounded-circle"
                    />
                    <p className="fw-bold m-0 ms-2 fs-5 ff-header">Name Surname</p>
                  </div>
                  <div>
                    <h2 className="fs-4 fw-bold">Contact Details:</h2>
                    <div className="d-flex align-items-center my-3">
                      <PhoneFill className="text-info" size={15}></PhoneFill>
                      <p className="custom-fs-6 m-0 ms-2">9804392032</p>
                    </div>
                    <div className="d-flex align-items-center my-3">
                      <EnvelopeFill className="text-info" size={15}></EnvelopeFill>
                      <p className="custom-fs-6 m-0 ms-2">name@example.com</p>
                    </div>
                    <div className="d-flex align-items-center my-3">
                      <HouseDoorFill className="text-info" size={15}></HouseDoorFill>
                      <p className="custom-fs-6 m-0 ms-2">adress, London 10121</p>
                    </div>
                  </div>
                  <Row className=" row-cols-2 h-100">
                    <Col className="my-3">
                      <h3 className="fw-bold mb-1 mt-2 fs-5">Sex:</h3>
                      <p className="custom-fs-6 m-0">Female</p>
                    </Col>
                    <Col className="my-3">
                      <h3 className="fw-bold mb-1 mt-2 fs-5">Date of Birth:</h3>
                      <p className="custom-fs-6 m-0">10/03/1987</p>
                    </Col>
                    <Col className="my-3">
                      <h3 className="fw-bold mb-1 mt-2 fs-5">Blood Type:</h3>
                      <p className="custom-fs-6 m-0">A+</p>
                    </Col>
                    <Col className="my-3">
                      <h3 className="fw-bold mb-1 mt-2 fs-5">Height:</h3>
                      <p className="custom-fs-6 m-0">1.75 m</p>
                    </Col>
                    <Col className="my-3">
                      <h3 className="fw-bold mb-1 mt-2 fs-5">Last Donation Date:</h3>
                      <p className="custom-fs-6 m-0">27/02/2022</p>
                    </Col>
                    <Col className="my-3">
                      <h3 className="fw-bold mb-1 mt-2 fs-5">Weight:</h3>
                      <p className="custom-fs-6 m-0">78 kg</p>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
            <Row className="mt-4">
              <Col>
                <div className=" d-flex flex-column justify-content-start px-4 py-2 border-primary-l rounded-5 h-100">
                  <div className="d-flex flex-column flex-sm-row align-items-center justify-content-between mt-1 mb-3">
                    <h2 className="fs-4 fw-bold mb-2 m-sm-0">Appointments</h2>
                    <div className="d-flex align-items-center justify-content-between justify-content-sm-end w-100">
                      <div className="d-flex align-items-center justify-content-between justify-content-sm-end w-100">
                        <input className="mx-2 p-1" type="month" />
                        <Button
                          id="profile-btn"
                          className="text-white d-none d-md-block custom-bg-button border-button rounded-4 py-2"
                        >
                          Book Appointment
                        </Button>
                        <Button
                          id="profile-btn"
                          className="text-white d-flex justify-content-center d-md-none custom-bg-button border-button rounded-4"
                        >
                          <CalendarPlus size={20}></CalendarPlus>
                        </Button>
                      </div>
                    </div>
                  </div>
                  <Table hover responsive="lg" striped>
                    <thead>
                      <tr>
                        <th className="custom-fs-6 text-nowrap">Center Location</th>
                        <th className="custom-fs-6 text-nowrap">Chek-in</th>
                        <th className="custom-fs-6 text-nowrap">Date</th>
                        <th className="custom-fs-6 text-nowrap">Time</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="table-info">
                        <td className="custom-fs-6 text-nowrap">via spagna 15</td>
                        <td className="custom-fs-6 text-nowrap">Yes</td>
                        <td className="custom-fs-6 text-nowrap">21/08/2011</td>
                        <td className="custom-fs-6 text-nowrap">10:30</td>
                      </tr>
                      <tr className="table-info">
                        <td className="custom-fs-6 text-nowrap">via spagna 15</td>
                        <td className="custom-fs-6 text-nowrap">Yes</td>
                        <td className="custom-fs-6 text-nowrap">21/08/2011</td>
                        <td className="custom-fs-6 text-nowrap">10:30</td>
                      </tr>
                    </tbody>
                  </Table>
                  <Pagination
                    className="pagination-bar"
                    currentPage={currentPage}
                    totalCount={90}
                    pageSize={PageSize}
                    onPageChange={(page) => setCurrentPage(page)}
                  ></Pagination>
                </div>
              </Col>
            </Row>
          </Container>
          <footer className="custom-bg-accent-l d-flex justify-content-center align-items-center">
            <Footer></Footer>
          </footer>
        </main>
      )}
    </>
  );
};
export default Profile;
