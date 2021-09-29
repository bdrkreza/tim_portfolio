import React from "react";
import { Col, Container, Row, UncontrolledCarousel } from "reactstrap";
import ProjectD from "./ProjectD";
export default function ProjectCard({ data }) {
  return (
    <div>
      <Container className="mt-5">
        <div class="devicer"></div>
        <Row className="justify-content-between">
          <Col md="6">
            <Row className="justify-content-between align-items-center h-100">
              <UncontrolledCarousel items={data.img} />
            </Row>
          </Col>
          <Col md="5">
            <ProjectD data={data} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
