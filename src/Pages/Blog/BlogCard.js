import React from "react";
import ReactReadMoreReadLess from "react-read-more-read-less";
import {
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  Col,
  Row,
} from "reactstrap";

export default function BlogCard({ data }) {
  const { img, title, description } = data.blog;

  return (
    <>
      <Row>
        <Col className="order-xl-2 mb-xl-0 " xl="1">
          <Card style={{ width: "22rem", hight: "50px" }}>
            <CardImg className="floating" top src={img} />
            <CardBody>
              <CardTitle className="h4 text-cyan">{title}</CardTitle>
              <CardText>
                <ReactReadMoreReadLess
                  charLimit={200}
                  readMoreText={"Read more ▼"}
                  readLessText={"Read less ▲"}
                  readMoreClassName="read-more-less--more"
                  readLessClassName="read-more-less--less"
                >
                  {description}
                </ReactReadMoreReadLess>
              </CardText>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>
  );
}
