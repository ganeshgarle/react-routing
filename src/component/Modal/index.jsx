import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function CustomModal({
  teamName = "",
  show = false,
  handleClose = () => {},
  handleAction,
}) {
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Team {teamName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>Do you want to delete this team</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            No
          </Button>
          <Button variant="primary" onClick={() => handleAction(teamName)}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CustomModal;
