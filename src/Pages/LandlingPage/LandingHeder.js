import { iconData } from "assets/FakeData/Data";
import React from "react";
import { Button, Col, Row, UncontrolledCarousel } from "reactstrap";
export default function LandingHeder() {
  return (
    <>
      <div className="content-center">
        <Row className="row-grid justify-content-between align-items-center text-left ">
          <Col lg="5">
            <h1 className="text-white">
              Make your WebSite <br />
              <span className="text-white">Design</span>
            </h1>
            <p className="text-white mb-3">
              A wonderful serenity has taken possession of my entire soul, like
              these sweet mornings of spring which I enjoy with my whole heart.
              I am alone, and feel...
            </p>
            <div className="btn-wrapper mb-3">
              <p className="category text-success d-inline">From 9.99%/mo</p>
              <Button
                className="btn-link"
                color="success"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
                size="sm"
              >
                <i className="tim-icons icon-minimal-right" />
              </Button>
            </div>
            <div className="btn-wrapper">
              <div className="button-container">
                <Button
                  className="btn-icon btn-simple btn-round btn-neutral"
                  color="default"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  <i className="fab fa-twitter" />
                </Button>
                <Button
                  className="btn-icon btn-simple btn-round btn-neutral"
                  color="default"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  <i className="fab fa-dribbble" />
                </Button>
                <Button
                  className="btn-icon btn-simple btn-round btn-neutral"
                  color="default"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  <i className="fab fa-facebook" />
                </Button>
              </div>
            </div>
          </Col>
          <Col lg="6" md="6">
            <UncontrolledCarousel
              items={iconData}
              indicators={false}
              autoPlay={true}
            />
          </Col>
        </Row>
      </div>
    </>
  );
}
