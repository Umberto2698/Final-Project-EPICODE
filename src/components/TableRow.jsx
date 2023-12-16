import { useState } from "react";
import { Button, FloatingLabel, Form, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { updateMyAppointment } from "../redux/actions/profileAction";

const TableRow = (props) => {
  const dispatch = useDispatch();
  const loginState = useSelector((state) => state.login.respLogin);
  const { id, address, cap, check, city, date } = props;
  const [selectedDate, setSelectedDate] = useState(props.date);
  const [selectedCheck, setSelectedCheck] = useState(props.check);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(updateMyAppointment(loginState.authorizationToken.token, id, selectedDate, selectedCheck));
    handleClose();
  };
  return (
    <>
      <tr
        role={Date.now() <= Date.parse(date) && "button"}
        onClick={Date.now() <= Date.parse(date) ? handleShow : null}
      >
        <td className="custom-fs-6 text-nowrap">{address}</td>
        <td className="custom-fs-6 text-nowrap">{cap}</td>
        <td className="custom-fs-6 text-nowrap">{city}</td>
        <td className="custom-fs-6 text-nowrap">{check}</td>
        <td className="custom-fs-6 text-nowrap">{date}</td>
      </tr>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <FloatingLabel
              controlId="floatingDonationDate"
              label="Donation date"
              className="mb-4 clr-secondary border-secondary rounded-4 fw-bold fs-6"
            >
              <Form.Control
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                type="date"
                placeholder="donation date"
                className="rounded-4 custom-input fs-5"
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingSelectGrid"
              label="Check-in"
              className="clr-secondary border-secondary rounded-4 fw-bold fs-6"
            >
              <Form.Select
                size="5"
                className="rounded-4 custom-input fs-6"
                onChange={(e) => setSelectedCheck(e.target.value)}
                aria-label="check-in selector"
              >
                <option value={check}>Change status</option>
                <option value="YES">Confirmed</option>
                <option value="NO">No</option>
                <option value="CANCELLED">Cancelled</option>
              </Form.Select>
            </FloatingLabel>
            <div className="mt-4 d-flex align-items-center justify-content-between">
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleSubmit}>
                Save Changes
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};
export default TableRow;
