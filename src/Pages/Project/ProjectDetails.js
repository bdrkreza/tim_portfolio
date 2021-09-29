import React from "react";
import { Button, Col, Row } from "reactstrap";
export default function ProjectDetails({ data }) {
  console.log(data);
  return (
    <div>
      <Row>
        <Col md="6">
          <h1 className="profile-title text-left">Projects</h1>
          <h5 className="text-on-back">{data.qty}</h5>
        </Col>
        <Col md="6">
          <div className="card border-light mb-3" style={{ maxWidth: "20rem" }}>
            <div className="card-header bg-dark">Tools Used</div>
            <div className="card-body project_tools">
              {data.tools.map((data) => (
                <button type="button" class="project_btn  btn-sm mt-2">
                  {data.tools}
                </button>
              ))}
            </div>
          </div>
        </Col>
      </Row>

      <div className="card border-secondary mb-3" style={{ maxWidth: "30rem" }}>
        <div className="card-header bg-dark h4 ">Project Features</div>
        <>
          {data.feature.map((data) => (
            <Row>
              <Col lg="12" md="12" sm="12">
                <ul>
                  <li>{data.feature}</li>
                </ul>
              </Col>
            </Row>
          ))}
        </>
      </div>
      <div className="btn-wrapper pt-3 d-flex justify-content-around">
        <a href={data.liveLink} target="_blank" rel="noreferrer">
          <Button className="btn-simple" color="primary">
            <i className="fas fa-external-link-alt mr-2"></i>
            Demo Live
          </Button>
        </a>

        <a href={data.getHubLink} target="_blank" rel="noreferrer">
          <Button className="btn-simple" color="info">
            <i className="fab fa-github mr-2"></i>
            Github Code
          </Button>
        </a>
      </div>
    </div>
  );
}
