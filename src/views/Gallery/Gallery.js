import { projectIm } from "assets/FakeData/projectImg";
import LoadMoreButton from "components/Button/LoadMoreButton";
import React, { useEffect, useState } from "react";
// reactstrap components
import { CardTitle, Col, Container, Row } from "reactstrap";
import GalleryCard from "./GalleryCard";

export default function Gallery() {
  const [items, setItems] = useState([]);
  const [visible, setVisible] = useState(4);
  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 2);
  };

  useEffect(() => {
    setItems(projectIm);
  }, []);
  return (
    <div className="section section-examples" data-background-color="black">
      <img
        alt="..."
        className="path"
        src={require("assets/img/path1.png").default}
      />
      <div className="space-50" />
      <Container className="text-center">
        <Row>
          <Col className="text-left" sm="6">
            <hr className="line-info" />
            <CardTitle tag="h2"> Our Gallery</CardTitle>
          </Col>
        </Row>

        <Row>
          {items.slice(0, visible).map((Items) => (
            <Col sm="6">
              <GalleryCard Items={Items} />
            </Col>
          ))}
        </Row>

        <LoadMoreButton showMoreItems={showMoreItems} />
      </Container>
    </div>
  );
}
