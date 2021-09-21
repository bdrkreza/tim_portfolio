import { iconData } from "assets/FakeData/Data";
import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  Col,
  Container,
  Row,
  UncontrolledCarousel,
  UncontrolledTooltip,
} from "reactstrap";

export const carouselItems = [
  {
    src: require("assets/img/denys.jpg").default,
    altText: "Slide 1",
    caption: "",
  },
  {
    src: require("assets/img/fabien-bazanegue.jpg").default,
    altText: "Slide 2",
    caption: "",
  },
  {
    src: require("assets/img/mark-finn.jpg").default,
    altText: "Slide 3",
    caption: "",
  },
];
export default function PageHeader() {
  return (
    <div className="page-header header-filter">
      <div className="squares square1" />
      <div className="squares square2" />
      <div className="squares square3" />
      <div className="squares square4" />
      <div className="squares square5" />
      <div className="squares square6" />
      <div className="squares square7" />
      <div className="section">
        <Container>
          <div className="title">
            <h3>Carousel</h3>
          </div>
          <Row className="justify-content-between align-items-center">
            <Col className="mb-5 mb-lg-0" lg="5">
              <h1 className="text-white font-weight-light">Md Rezaul Karim</h1>
              <p className="text-white mt-4">
                Black Design comes with three pre-built pages to help you get
                started faster. You can change the text and images and you're
                good to go.
              </p>
              <div className="btn-wrapper profile pt-3">
                <Button
                  className="btn-icon btn-round"
                  color="twitter"
                  href="https://twitter.com/creativetim"
                  id="tooltip639225725"
                  target="_blank"
                >
                  <i className="fab fa-twitter" />
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip639225725">
                  Follow us
                </UncontrolledTooltip>
                <Button
                  className="btn-icon btn-round"
                  color="facebook"
                  href="https://www.facebook.com/creativetim"
                  id="tooltip982846143"
                  target="_blank"
                >
                  <i className="fab fa-facebook-square" />
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip982846143">
                  Like us
                </UncontrolledTooltip>
                <Button
                  className="btn-icon btn-round"
                  color="dribbble"
                  href="https://dribbble.com/creativetim"
                  id="tooltip951161185"
                  target="_blank"
                >
                  <i className="fab fa-dribbble" />
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip951161185">
                  Follow us
                </UncontrolledTooltip>
              </div>
            </Col>
            <Col lg="6">
              <Link to="/project">
                <UncontrolledCarousel
                  items={iconData}
                  indicators={false}
                  autoPlay={true}
                />
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
