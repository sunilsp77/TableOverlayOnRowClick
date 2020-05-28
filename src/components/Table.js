import React, { useState } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import { TableOverlay } from "./TableOverlay";

export default function Table() {
  const [showOverlay, setShowOverlay] = useState(false);
  const [overlayData, setOverlayData] = useState(null);
  const columns = [
    {
      dataField: "id",
      text: "Product ID"
    },
    {
      dataField: "name",
      text: "Product Name"
    },
    {
      dataField: "price",
      text: "Product Price"
    }
  ];

  const products = [
    { id: 0, name: "Item name 0", price: 2100 },
    { id: 1, name: "Item name 1", price: 2101 },
    { id: 2, name: "Item name 2", price: 2102 },
    { id: 3, name: "Item name 3", price: 2103 },
    { id: 4, name: "Item name 4", price: 2104 }
  ];

  const rowEvents = {
    onClick: (e, row, rowIndex) => {
      console.log(`clicked on row with index: ${rowIndex}`);
      setOverlayData(row);
      setShowOverlay(true);
    }
  };
  const closeOverlay = () => {
    setShowOverlay(false);
  };
  return (
    <>
      <BootstrapTable
        keyField="id"
        data={products}
        columns={columns}
        rowEvents={rowEvents}
        hover
      />

      <TableOverlay
        overlayData={overlayData}
        showOverlay={showOverlay}
        closeOverlay={closeOverlay}
      />
    </>
  );
}
