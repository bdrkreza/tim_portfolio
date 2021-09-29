import { serviceData } from "assets/FakeData/Data";
import LoadMoreButton from "components/Button/LoadMoreButton";
import React, { useEffect, useState } from "react";
import { CardTitle, Col, Container, Row } from "reactstrap";
import ServiceCard from "./ServiceCard";
import ServiceHeader from "./ServiceHeader";

export default function Service() {
  const [items, setItems] = useState([]);
  const [visible, setVisible] = useState(4);
  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 2);
  };

  useEffect(() => {
    setItems(serviceData);
  }, []);
  return (
    <>
      <div>
        <img
          alt="..."
          className="path"
          src={require("assets/img/blob.png").default}
        />
        <img
          alt="..."
          className="path"
          src={require("assets/img/path2.png").default}
        />

        <ServiceHeader />
        <Container className="mt-5 text-center mb-5">
          <Row>
            <Col className="text-left" sm="6">
              <hr className="line-info" />
              <CardTitle tag="h2"> Our Service</CardTitle>
            </Col>
          </Row>
          <Row>
            {items.slice(0, visible).map((data, i) => (
              <Col key={i} className="spacing" lg="6" sm="6" xs="12">
                <ServiceCard data={data} />
              </Col>
            ))}
          </Row>

          <LoadMoreButton showMoreItems={showMoreItems} />
        </Container>
      </div>
    </>
  );
}
