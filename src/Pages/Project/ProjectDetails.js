import React from "react";
import { Button, Col, Row } from "reactstrap";
export default function ProjectDetails({ data }) {
  return (
    <div>
      <Row>
        <Col md="6">
          <h1 className="profile-title text-left">Projects</h1>
          <h5 className="text-on-back">{data.qty}</h5>
        </Col>
        <Col md="6">
          <div class="card border-light mb-3" style={{ maxWidth: "20rem" }}>
            <div class="card-header bg-dark">Tools Used</div>
            <div class="card-body project_tools">
              {data.tools.map((data) => (
                <button type="button" class="project_btn  btn-sm mt-2">
                  {data.tools}
                </button>
              ))}
            </div>
          </div>
        </Col>
      </Row>

      <div class="card border-secondary mb-3" style={{ maxWidth: "30rem" }}>
        <div class="card-header bg-dark h4 ">Project Features</div>
        <>
          {data.feature.map((data) => (
            <Row>
              <Col lg="6" md="6" sm="12">
                <ul>
                  <li>{data.feature}</li>
                </ul>
              </Col>

              <Col lg="6" md="6" sm="12">
                <ul>
                  <li>{data.feature}</li>
                </ul>
              </Col>
            </Row>
          ))}
        </>
      </div>
      <div className="btn-wrapper pt-3">
        <Button
          className="btn-simple"
          color="primary"
          href="#pablo"
          onClick={(e) => e.preventDefault()}
        >
          <i className="tim-icons icon-book-bookmark" /> Demo Live
        </Button>
        <Button
          className="btn-simple"
          color="info"
          href="#pablo"
          onClick={(e) => e.preventDefault()}
        >
          <i className="tim-icons icon-bulb-63" />
          Github Code
        </Button>
      </div>
    </div>
  );
}
