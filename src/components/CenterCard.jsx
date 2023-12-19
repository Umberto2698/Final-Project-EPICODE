import { useState } from "react";
import { Button, Card, FloatingLabel, Form, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { submitDonation } from "../redux/actions/donationCenterAction.js";
import { Link } from "react-router-dom";

const CenterCard = (props) => {
  const dispatch = useDispatch();
  const successMessage = useSelector((state) => state.state.success.content);
  const errorMessage = useSelector((state) => state.state.error.content);
  const { token, id, address, municipality, cap, municipalityAbbr, denomination, image } = props;
  const [date, setDate] = useState("");

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showMessage, setShowMessage] = useState(false);

  const handleMessageClose = () => setShowMessage(false);
  const handleMessageShow = () => setShowMessage(true);

  const handleMix = () => {
    handleClose();
    handleMessageShow();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(submitDonation(token, id, date));
    handleClose();
  };

  return (
    <>
      <Card className="custom-info h-100">
        <Card.Img variant="top" src={image} />
        <Card.Body className="d-flex flex-column justify-content-end">
          <Card.Title>{denomination}</Card.Title>
          <Card.Text className="mb-4">
            {address}, {municipality}-{municipalityAbbr}, {cap}
          </Card.Text>
          <Button
            id="profile-btn"
            className="mt-auto text-white d-md-block custom-bg-button border-button rounded-4 py-2"
            onClick={handleShow}
          >
            Book Appointment
          </Button>
        </Card.Body>
      </Card>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="fw-bold m-0">Book Appointment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className="d-flex flex-column justify-content-center" onSubmit={handleSubmit}>
            <FloatingLabel
              controlId="floatingAppointmentDate"
              label="Appointment Date"
              className="mb-4 w-100 clr-secondary border-secondary rounded-4 fw-bold fs-6"
            >
              <Form.Control
                type="date"
                required
                onChange={(e) => {
                  setDate(e.target.value);
                }}
                min={`${new Date(Date.now()).getFullYear()}-${new Date(Date.now()).getMonth() + 1}-${
                  new Date(Date.now()).getDate() + 1
                }`}
                max={`${new Date(Date.now()).getFullYear() + 2}-12-31`}
                placeholder="appointment date"
                className="rounded-4  custom-input fs-5"
              />
            </FloatingLabel>
            <div className="mt-4 d-flex align-items-center justify-content-between">
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button type="submit" variant="primary" onClick={handleMix}>
                Book
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
      <Modal show={showMessage} onHide={handleMessageClose}>
        {successMessage !== "" ? (
          <>
            <Modal.Header closeButton>
              <Modal.Title className="fw-bold m-0 text-success">Success!!</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p className="fw-bold">{successMessage}</p>
              <p className="m-0">
                Go in your&nbsp;
                <Link className="fw-bold text-black text-decoration-none" to="/profile">
                  Profile
                </Link>
                &nbsp;and update the check-in status.
              </p>
            </Modal.Body>
          </>
        ) : (
          <>
            <Modal.Header closeButton>
              <Modal.Title className="fw-bold m-0 text-danger">Error!</Modal.Title>
            </Modal.Header>
            <Modal.Body className="fw-bold">{errorMessage}</Modal.Body>
          </>
        )}
      </Modal>
    </>
  );
};

export default CenterCard;
