import React from "react";
import { Modal } from "react-bootstrap";
import OverlayHeader from "./Overlay/OverlayHeader";

export default function ModalOverlay({ show, handleClose, overlayData }) {
  return (
    <Modal
      show={show}
      onHide={handleClose}
      dialogAs="div"
      dialogClassName="overlay_modal"
    >
      <Modal.Header closeButton>
        <OverlayHeader />
      </Modal.Header>
      <Modal.Body bsPrefix="overlay_data">
        <p>Product Name : {overlayData ? overlayData.name : ""}</p>
        <p>Product Price : {overlayData ? overlayData.price : ""} </p>
      </Modal.Body>
      <Modal.Footer>
        <div>Modal Footer</div>
      </Modal.Footer>
    </Modal>
  );
}
