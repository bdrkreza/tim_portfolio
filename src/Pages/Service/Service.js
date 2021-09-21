import React from "react";
import { CardTitle, Col, Container, Row } from "reactstrap";
import ServiceCard from "./ServiceCard";
const cards = [
  {
    title: "Main title",
    subTitle: "Sub title",
    text: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
  },
  {
    title: "Main title",
    subTitle: "Sub title",
    text: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
  },
  {
    title: "Main title",
    subTitle: "Sub title",
    text: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
  },
  {
    title: "Main title",
    subTitle: "Sub title",
    text: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
  },
  {
    title: "Main title",
    subTitle: "Sub title",
    text: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
  },
  {
    title: "Main title",
    subTitle: "Sub title",
    text: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
  },
];
export default function Service() {
  return (
    <div className="page-header">
      <img
        alt="..."
        className="dots"
        src={require("assets/img/dots.png").default}
      />
      <img
        alt="..."
        className="path"
        src={require("assets/img/path4.png").default}
      />
      <Container>
        <Row>
          <Col className="text-left" sm="6">
            <hr className="line-info" />
            <CardTitle tag="h2"> Our Service</CardTitle>
          </Col>
        </Row>
        <Row>
          {cards.map((data, i) => (
            <Col key={i} className="spacing" lg="4" sm="6" xs="12">
              <ServiceCard {...data} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
