import LoadMoreButton from "components/Button/LoadMoreButton";
import React, { useEffect, useState } from "react";
import { Col, Container, Row, UncontrolledCarousel } from "reactstrap";
import project from "../../assets/FakeData/project.json";
import ProjectDetails from "./ProjectDetails";
import ProjectTopBar from "./ProjectTopBar";

export default function Project() {
  const [items, setItems] = useState([]);
  const [visible, setVisible] = useState(3);
  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 2);
  };

  useEffect(() => {
    setItems(project);
  }, []);
  return (
    <div>
      <div className="section mt-5">
        <ProjectTopBar />
        <img
          alt="..."
          className="path w-100 h-100"
          src={require("assets/img/path5.png").default}
        />

        {items.slice(0, visible).map((data) => {
          return (
            <Container className="mt-5">
              <div class="devicer"></div>
              <Row className="justify-content-between">
                <Col md="6">
                  <Row className="justify-content-between align-items-center h-100 floating">
                    <UncontrolledCarousel items={data.img} />
                  </Row>
                </Col>
                <Col md="5">
                  <ProjectDetails data={data} />
                </Col>
              </Row>
            </Container>
          );
        })}
      </div>
      <div className="text-center mb-5">
        <LoadMoreButton showMoreItems={showMoreItems} />
      </div>
    </div>
  );
}
