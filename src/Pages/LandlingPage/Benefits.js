import React from "react";
import { Col, Container, Row } from "reactstrap";
export default function Benefits() {
  return (
    <div>
      <Container>
        <Row className="justify-content-center">
          <Col lg="12">
            <h1 className="text-center">Your best benefit</h1>
            <Row className="row-grid justify-content-center">
              <Col lg="3">
                <div className="info">
                  <div className="icon icon-primary">
                    <i className="tim-icons icon-money-coins" />
                  </div>
                  <h4 className="info-title">Low Commission</h4>
                  <hr className="line-primary" />
                  <p>
                    Divide details about your work into parts. Write a few lines
                    about each one. A paragraph describing a feature will.
                  </p>
                </div>
              </Col>
              <Col lg="3">
                <div className="info">
                  <div className="icon icon-warning">
                    <i className="tim-icons icon-chart-pie-36" />
                  </div>
                  <h4 className="info-title">High Incomes</h4>
                  <hr className="line-warning" />
                  <p>
                    Divide details about your product or agency work into parts.
                    Write a few lines about each one. A paragraph describing
                    feature will be a feature.
                  </p>
                </div>
              </Col>
              <Col lg="3">
                <div className="info">
                  <div className="icon icon-success">
                    <i className="tim-icons icon-single-02" />
                  </div>
                  <h4 className="info-title">Verified People</h4>
                  <hr className="line-success" />
                  <p>
                    Divide details about your product or agency work into parts.
                    Write a few lines about each one. A paragraph describing be
                    enough.
                  </p>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
