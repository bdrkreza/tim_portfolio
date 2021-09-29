import React from "react";
import ReactReadMoreReadLess from "react-read-more-read-less";
import { Col, Row } from "reactstrap";
export default function ReactBlogCard({ data }) {
  const { img, description, title } = data.blog;
  return (
    <>
      <Row className="row-grid justify-content-between mt-5 ">
        <Col md="4" className="d-flex align-items-center">
          <img
            alt="..."
            className="img-fluid floating w-100 h-100  "
            src={img}
          />
        </Col>
        <Col md="7">
          <div className="px-md-5">
            <hr className="line-success" />
            <h3>{title} </h3>
            <p>
              <ReactReadMoreReadLess
                charLimit={200}
                readMoreText={"Read more ▼"}
                readLessText={"Read less ▲"}
                readMoreClassName="read-more-less--more"
                readLessClassName="read-more-less--less"
              >
                {description}
              </ReactReadMoreReadLess>
            </p>
            <ul className="list-unstyled mt-5">
              <li className="py-2">
                <div className="d-flex align-items-center">
                  <div className="icon icon-success mb-2">
                    <i className="tim-icons icon-vector" />
                  </div>
                  <div className="ml-3">
                    <h6>Carefully crafted components</h6>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </Col>
      </Row>
    </>
  );
}
