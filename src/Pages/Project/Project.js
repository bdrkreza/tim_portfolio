import React from "react";
import { Col, Container, Row, UncontrolledCarousel } from "reactstrap";
import project from "../../assets/FakeData/project.json";
import ProjectDetails from "./ProjectDetails";
import ProjectTopBar from "./ProjectTopBar";

export default function Project() {
  return (
    <div>
      <div className="section">
        <ProjectTopBar />
        {project.map((data) => {
          return (
            <Container className="mt-5">
              <div class="devicer"></div>
              <Row className="justify-content-between">
                <Col md="6">
                  <Row className="justify-content-between align-items-center h-100">
                    <UncontrolledCarousel items={data.img} />
                  </Row>
                </Col>
                <Col md="5">
                  <ProjectDetails data={data} />
                </Col>
              </Row>
            </Container>
          );
        })}
      </div>
    </div>
  );
}
