import React from "react";
import { Modal } from "react-bootstrap";
import OverlayHeader from "./Overlay/OverlayHeader";
import OverlayCard from "./Overlay/OverlayCard";

export default function ModalOverlay({ show, handleClose, overlayData }) {
  return (
    <Modal
      show={show}
      onHide={handleClose}
      // dialogAs="div"
      dialogClassName="overlay_modal"
      scrollable
      className="custom_overlay right"
    >
      <Modal.Header closeButton>
        <OverlayHeader />
      </Modal.Header>
      <Modal.Body>
        {/* <p>Product Name : {overlayData ? overlayData.name : ""}</p>
        <p>Product Price : {overlayData ? overlayData.price : ""} </p> */}
        <OverlayCard />
      </Modal.Body>
      {/* <Modal.Footer>
        <div>Modal Footer</div>
      </Modal.Footer> */}
    </Modal>
  );
}
