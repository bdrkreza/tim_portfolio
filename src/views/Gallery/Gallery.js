import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import { Button, CardTitle, Col, Container, Row } from "reactstrap";

export default function Gallery() {
  return (
    <div className="section section-examples" data-background-color="black">
      <img
        alt="..."
        className="path"
        src={require("assets/img/path1.png").default}
      />
      <div className="space-50" />
      <Container className="text-center">
        <Row>
          <Col className="text-left" sm="6">
            <hr className="line-info" />
            <CardTitle tag="h2"> Our Gallery</CardTitle>
          </Col>
        </Row>
        <Row>
          <Col sm="6">
            <Link to="landing-page">
              <img
                alt="..."
                className="img-raised"
                src={require("assets/img/landing-page.png").default}
              />
            </Link>
            <Button
              className="btn-simple btn-round"
              color="primary"
              to="landing-page"
              tag={Link}
            >
              View Landing Page
            </Button>
          </Col>
          <Col sm="6">
            <Link to="about">
              <img
                alt="..."
                className="img-raised"
                src={require("assets/img/profile-page.png").default}
              />
            </Link>
            <Button
              className="btn-simple btn-round"
              color="primary"
              to="about"
              tag={Link}
            >
              View Profile Page
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
