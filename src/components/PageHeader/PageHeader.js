import { projectItems } from "assets/FakeData/projectImg";
import IconsButton from "components/Button/IconsButton";
import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import { Col, Container, Row, UncontrolledCarousel } from "reactstrap";

export default function PageHeader() {
  return (
    <div className="">
      <div className="squares square1" />
      <div className="squares square5" />
      <div className="squares square2" />
      <div className="squares square3" />
      <div className="squares square3" />
      <div className="squares square4" />
      <div className="squares square5" />
      <div className="squares square6" />
      <div className="section mt-5">
        <Container>
          <div className="title">
            <h3>WelCome My WebSite</h3>
          </div>
          <Row className="justify-content-between align-items-center">
            <Col className="" lg="5">
              <h1 className="text-white font-weight-light">Md Rezaul Karim</h1>
              <p className="text-white mt-4">
                Black Design comes with three pre-built pages to help you get
                started faster. You can change the text and images and you're
                good to go.
              </p>
              <IconsButton />
            </Col>
            <Col lg="6">
              <div className="mt-5">
                <Link to="/project">
                  <UncontrolledCarousel
                    items={projectItems}
                    indicators={false}
                    autoPlay={true}
                  />
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
