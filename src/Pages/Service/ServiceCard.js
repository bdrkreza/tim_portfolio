import React from "react";
import ReactReadMoreReadLess from "react-read-more-read-less";
import { Card, CardBody, CardText, CardTitle, Col } from "reactstrap";
export default function ServiceCard({ data }) {
  const { img, title, describe } = data;
  return (
    <>
      <div class="inner"></div>
      <Card className="d-flex justify-content-center align-content-center  service_card ">
        <Col className="mt-3 mb-3 d-flex align-content-center justify-content-center">
          <img
            alt="..."
            className="img-fluid rounded shadow-lg"
            src={img}
            style={{ width: "100px" }}
          />
        </Col>
        <Col>
          <CardBody className="service_body">
            <CardTitle className="h3">{title}</CardTitle>
            <CardText>
              <ReactReadMoreReadLess
                charLimit={100}
                readMoreText={"Read more ▼"}
                readLessText={"Read less ▲"}
                readMoreClassName="read-more-less--more"
                readLessClassName="read-more-less--less"
              >
                {describe}
              </ReactReadMoreReadLess>
            </CardText>
          </CardBody>
        </Col>
      </Card>
    </>
  );
}
