import React from "react";
import { Card, Row, Col, Container } from "react-bootstrap";
import AIPredictedBehaviors from "./AIPredictedBehaviors";

const OverlayCard = () => {
  return (
    <>
      <Card bg="dark" text="light">
        <Card.Body>
          <Container>
            <Row>
              <Col lg={true}>
                <TwoRowData row1="Appliance" row2="cola" />
              </Col>
              <Col lg={true}>
                <TwoRowData row1="Appliance" row2="cola" />
              </Col>
              <Col lg={true}>
                <TwoRowData row1="Appliance" row2="cola" />
              </Col>
            </Row>
          </Container>
        </Card.Body>
      </Card>
      <br />
      <Card bg="dark" text="light" border="lightgray">
        <Card.Header>INFECTED HOSTS</Card.Header>
        <Card.Body>
          <TwoRowData
            row1="Targeting [8]"
            row2="121.73.96.30, 58.156.27.210, 127.9.43.59, 7.179.205.184, 229.230.70.89"
          />
        </Card.Body>
      </Card>
      <br />
      <Card bg="dark" text="light">
        <Card.Header>THREAT INTEL</Card.Header>
        <Card.Body>
          <Container>
            <Row>
              <Col lg={true}>
                <TwoRowData row1="Appliance" row2="cola" />
                <TwoRowData row1="Appliance" row2="cola" />
                <TwoRowData row1="Appliance" row2="cola" />
                <TwoRowData row1="Appliance" row2="cola" />
                <TwoRowData row1="Appliance" row2="cola" />
              </Col>
              <Col lg={true}>
                <TwoRowData row1="Appliance" row2="cola" />
                <TwoRowData row1="Appliance" row2="cola" />
                <TwoRowData row1="Appliance" row2="cola" />
                <TwoRowData row1="Appliance" row2="cola" />
                <TwoRowData row1="Appliance" row2="cola" />
              </Col>
            </Row>
          </Container>
        </Card.Body>
      </Card>

      <br />
      <AIPredictedBehaviors />
    </>
  );
};

export default OverlayCard;

export const TwoRowData = ({ row1, row2 }) => {
  return (
    <>
      <Row className="font-weight-bold">{row1}</Row>
      <Row>{row2}</Row>
    </>
  );
};
