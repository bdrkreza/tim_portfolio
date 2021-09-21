import React from "react";
import { Card, CardBody, CardText, CardTitle, Col } from "reactstrap";
export default function ServiceCard(props) {
  return (
    <>
      <Card className="d-flex justify-content-center align-content-center">
        <Col className="mt-3 mb-3 d-flex align-content-center justify-content-center">
          <img
            alt="..."
            className="img-fluid rounded shadow-lg"
            src={require("assets/img/lora.jpg").default}
            style={{ width: "100px" }}
          />
        </Col>
        <Col>
          <CardBody className="service_body">
            <CardTitle className="h1">{props.title}</CardTitle>
            <CardText>{props.text}</CardText>
          </CardBody>
        </Col>
      </Card>
    </>
  );
}
