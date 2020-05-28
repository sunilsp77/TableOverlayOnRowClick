import React from "react";
import ReactDOM from "react-dom";

import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import "bootstrap/dist/css/bootstrap.min.css";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);
