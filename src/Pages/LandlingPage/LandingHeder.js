import IconsButton from "components/Button/IconsButton";
import React from "react";
import { Col, Row, UncontrolledCarousel } from "reactstrap";
import project from "../../assets/FakeData/project.json";
export default function LandingHeder() {
  console.log(project);
  return (
    <>
      <Row className="text-left  d-flex justify-content-between justify-content-center">
        <Col lg="5" className="mt-5">
          <h1 className="text-white">
            Make your WebSite <br />
            <span className="text-white">Design</span>
          </h1>
          <p className="text-white mb-3">
            A wonderful serenity has taken possession of my entire soul, like
            these sweet mornings of spring which I enjoy with my whole heart. I
            am alone, and feel...
          </p>
          <div className="btn-wrapper mb-3">
            <p className="category text-success d-inline">From 9.99%/mo</p>
            <IconsButton />
          </div>
        </Col>
        <Col lg="6" md="6">
          <div className="h-100 w-100">
            <UncontrolledCarousel
              items={project[1].img}
              indicators={false}
              autoPlay={true}
            />
          </div>
        </Col>
      </Row>
    </>
  );
}
