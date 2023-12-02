import { Button, Col, Container, Row, Spinner, Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Phone, EnvelopeFill, HouseDoorFill, ThreeDots, Mastodon } from "react-bootstrap-icons";
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
          <Container className="pt-5 mb-5 flex-grow-1">
            <Row>
              <Col lg={4}>
                <div className="d-flex flex-column justify-content-start px-4 py-2 border-primary rounded-3 ">
                  <div className="ms-auto mb-2 mt-1">
                    <ThreeDots role="button" className="text-dark-emphasis" size={20}></ThreeDots>
                  </div>
                  <div className="d-flex align-items-center mb-4">
                    <img
                      src="https://ui-avatars.com/api/?name=Umberto+Zappulla"
                      alt=""
                      width={50}
                      className="rounded-circle"
                    />
                    <p className="fw-bold m-0 ms-2 fs-5 ff-header">Name Surname</p>
                  </div>
                  <div>
                    <h2 className="fs-4 fw-bold">Contact Details:</h2>
                    <div className="d-flex align-items-center my-3">
                      <Phone size={15}></Phone>
                      <p className="custom-fs-6 m-0 ms-2">9804392032</p>
                    </div>
                    <div className="d-flex align-items-center my-3">
                      <EnvelopeFill size={15}></EnvelopeFill>
                      <p className="custom-fs-6 m-0 ms-2">name@example.com</p>
                    </div>
                    <div className="d-flex align-items-center my-3">
                      <HouseDoorFill size={15}></HouseDoorFill>
                      <p className="custom-fs-6 m-0 ms-2">adress, London 10121</p>
                    </div>
                  </div>
                </div>
              </Col>
              <Col lg={8}>
                <div className="d-flex flex-column justify-content-start px-4 py-2 border-primary rounded-3 h-100">
                  <div className="d-flex align-items-center justify-content-between mb-2 mt-1 ">
                    <h2 className="fs-4 fw-bold m-0">Overview:</h2>
                    <ThreeDots role="button" className="text-dark-emphasis" size={20}></ThreeDots>
                  </div>
                  <Row className="row-cols-3 h-100">
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
                <div className=" d-flex flex-column justify-content-start px-4 py-2 border border-info rounded-3 h-100">
                  <div className="d-flex align-items-center justify-content-between mt-1 mb-3">
                    <h2 className="fs-4 fw-bold m-0">Appointments</h2>
                    <div className="d-flex align-items-center">
                      <div className="d-flex align-items-center">
                        <input className="mx-2 p-1 w-100" type="month" />
                        <Button
                          id="profile-btn"
                          className="text-white w-100 custom-bg-button border-button rounded-4 py-2"
                        >
                          Book Appointment
                        </Button>
                      </div>
                    </div>
                  </div>
                  <Table borderless hover responsive striped>
                    <thead>
                      <tr className="table-light">
                        <th>Center Location</th>
                        <th>Chek-in</th>
                        <th>Date</th>
                        <th>Time</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="table-info">
                        <td>via spagna 15</td>
                        <td>Yes</td>
                        <td>21/08/2011</td>
                        <td>10:30</td>
                      </tr>
                      <tr className="table-info">
                        <td>via spagna 15</td>
                        <td>Yes</td>
                        <td>21/08/2011</td>
                        <td>10:30</td>
                      </tr>
                      <tr className="table-info">
                        <td>via spagna 15</td>
                        <td>Yes</td>
                        <td>21/08/2011</td>
                        <td>10:30</td>
                      </tr>
                      <tr className="table-info">
                        <td>via spagna 15</td>
                        <td>Yes</td>
                        <td>21/08/2011</td>
                        <td>10:30</td>
                      </tr>
                      <tr className="table-info">
                        <td>via spagna 15</td>
                        <td>Yes</td>
                        <td>21/08/2011</td>
                        <td>10:30</td>
                      </tr>
                      <tr className="table-info">
                        <td>via spagna 15</td>
                        <td>Yes</td>
                        <td>21/08/2011</td>
                        <td>10:30</td>
                      </tr>
                      <tr className="table-info">
                        <td>via spagna 15</td>
                        <td>Yes</td>
                        <td>21/08/2011</td>
                        <td>10:30</td>
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
