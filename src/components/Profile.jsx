import { Col, Container, Row, Spinner, Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Phone, EnvelopeFill, HouseDoorFill, ThreeDots } from "react-bootstrap-icons";
const Profile = () => {
  const isLoadingProfile = useSelector((state) => state.profile.isLoadingProfile);

  return (
    <>
      {!isLoadingProfile ? (
        <div className="d-flex justify-content-center w-100 align-items-center" style={{ height: "100vh" }}>
          <Spinner animation="border" variant="primary" />
        </div>
      ) : (
        <Container>
          <Row>
            <Col>
              <div id="parent">
                <div>
                  <ThreeDots size={20}></ThreeDots>
                </div>
                <div>
                  <img src="" alt="" />
                  <p>Name Surname</p>
                </div>
                <div>
                  <h2>Contact Details:</h2>
                  <div>
                    <Phone size={15}></Phone>
                    <p>9804392032</p>
                  </div>
                  <div>
                    <EnvelopeFill size={15}></EnvelopeFill>
                    <p>name@example.com</p>
                  </div>
                  <div>
                    <HouseDoorFill size={15}></HouseDoorFill>
                    <p>adress, London 10121</p>
                  </div>
                </div>
              </div>
            </Col>
            <Col>
              <Row>
                <Col>
                  <div>
                    <div>
                      <h2>Overview:</h2>
                      <ThreeDots size={20}></ThreeDots>
                    </div>
                    <Row>
                      <Col>
                        <h3>Gender:</h3>
                        <p>Female</p>
                      </Col>
                      <Col>
                        <h3>Date of Birth:</h3>
                        <p>10/03/1987</p>
                      </Col>
                      <Col>
                        <h3>Blood Type:</h3>
                        <p>A+</p>
                      </Col>
                      <Col>
                        <h3>Height:</h3>
                        <p>1.75 m</p>
                      </Col>
                      <Col>
                        <h3>Last Donation Date:</h3>
                        <p>27/02/2022</p>
                      </Col>
                      <Col>
                        <h3>Weight:</h3>
                        <p>78 kg</p>
                      </Col>
                    </Row>
                  </div>
                </Col>
                <Col>
                  <div>
                    <h2>Appointments</h2>
                    <div>
                      <p>Change Month</p>
                      <input type="text" placeholder="month" />
                    </div>
                    <div>
                      <p>Change Year</p>
                      <input type="text" placeholder="year" />
                    </div>
                    <button>Book Appointment</button>
                  </div>
                  <Table>
                    <thead>
                      <tr>
                        <th>Center Location</th>
                        <th>Chek-in</th>
                        <th>Date</th>
                        <th>Time</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>via spagna 15</td>
                        <td>Yes</td>
                        <td>21/08/2011</td>
                        <td>10:30</td>
                      </tr>
                    </tbody>
                  </Table>
                  <div>
                    <p>PAGINATION</p>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
};
export default Profile;
