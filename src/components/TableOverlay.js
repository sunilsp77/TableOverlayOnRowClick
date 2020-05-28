import React from "react";

export const TableOverlay = ({ overlayData, showOverlay, closeOverlay }) => {
  return (
    showOverlay && (
      <div className={`overlay ${showOverlay ? "open" : ""}`}>
        <div className="overlay_data">
          <p>Product Name : {overlayData.name}</p>
          <p>Product Price : {overlayData.price}</p>
        </div>
        <button className="overlay_button" onClick={closeOverlay}>
          &times;
        </button>
      </div>
    )
  );
};
