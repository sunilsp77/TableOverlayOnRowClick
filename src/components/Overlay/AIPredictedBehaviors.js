import React from "react";
import { Card, OverlayTrigger, Popover } from "react-bootstrap";
import { TwoRowData } from "./OverlayCard";

const AIPredictedBehaviors = () => {
  return (
    <Card bg="dark" text="light">
      <Card.Header>AI PREDICTED BEHAVIORS</Card.Header>
      <OverlayTrigger placement="left" overlay={popover}>
        <Card.Body className="mb-2">
          <TwoRowData
            row1="Hidden Files and Directories"
            row2="100% Confidence | Attack Tactics: Defence Evasion, Persistence"
          />
        </Card.Body>
      </OverlayTrigger>

      <OverlayTrigger placement="left" overlay={popover}>
        <Card.Body>
          <TwoRowData
            row1="Hidden Files and Directories"
            row2="100% Confidence | Attack Tactics: Defence Evasion, Persistence"
          />
        </Card.Body>
      </OverlayTrigger>
    </Card>
  );
};

export default AIPredictedBehaviors;

const popover = (
  <Popover id="popover-basic">
    <Popover.Title as="h3">Popover right</Popover.Title>
    <Popover.Content>
      And here's some <strong>amazing</strong> content. It's very engaging.
      right?
    </Popover.Content>
  </Popover>
);
