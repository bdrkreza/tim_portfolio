import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Container,
  ListGroup,
  ListGroupItem,
  Row,
} from "reactstrap";
export default function Package() {
  return (
    <div>
      <section className="section section-lg section-coins">
        <img
          alt="..."
          className="path"
          src={require("assets/img/path3.png").default}
        />
        <Container>
          <Row>
            <Col md="4">
              <hr className="line-info" />
              <h1>
                Choose the Web Design{" "}
                <span className="text-info">that fits your needs</span>
              </h1>
            </Col>
          </Row>
          <Row>
            <Col md="4">
              <Card className="card-coin card-plain">
                <CardHeader>
                  <img
                    alt="..."
                    className="img-center img-fluid"
                    src={require("../../assets/img/icon_5.png").default}
                  />
                </CardHeader>
                <CardBody>
                  <Row>
                    <Col className="text-center" md="12">
                      <h4 className="text-uppercase">Full Web Design</h4>
                      <span>Plan</span>
                      <hr className="line-primary" />
                    </Col>
                  </Row>
                  <Row>
                    <ListGroup>
                      <ListGroupItem>Template Design</ListGroupItem>
                      <ListGroupItem>Dynamic website</ListGroupItem>
                      <ListGroupItem>Dashboard Design</ListGroupItem>
                      <ListGroupItem>24/7 Support</ListGroupItem>
                    </ListGroup>
                  </Row>
                </CardBody>
                <CardFooter className="text-center">
                  <Button className="btn-simple" color="primary">
                    Get plan
                  </Button>
                </CardFooter>
              </Card>
            </Col>
            <Col md="4">
              <Card className="card-coin card-plain">
                <CardHeader>
                  <img
                    alt="..."
                    className="img-center img-fluid"
                    src={require("../../assets/img/Icon_3.jpg").default}
                  />
                </CardHeader>
                <CardBody>
                  <Row>
                    <Col className="text-center" md="12">
                      <h4 className="text-uppercase">Apps Design</h4>
                      <span>Plan</span>
                      <hr className="line-success" />
                    </Col>
                  </Row>
                  <Row>
                    <ListGroup>
                      <ListGroupItem>React Native</ListGroupItem>
                      <ListGroupItem>Responsive Design</ListGroupItem>
                      <ListGroupItem>24/7 Support</ListGroupItem>
                    </ListGroup>
                  </Row>
                </CardBody>
                <CardFooter className="text-center">
                  <Button className="btn-simple" color="success">
                    Get plan
                  </Button>
                </CardFooter>
              </Card>
            </Col>
            <Col md="4">
              <Card className="card-coin card-plain">
                <CardHeader>
                  <img
                    alt="..."
                    className="img-center img-fluid"
                    src={require("../../assets/img/Icon_2.png").default}
                  />
                </CardHeader>
                <CardBody>
                  <Row>
                    <Col className="text-center" md="12">
                      <h4 className="text-uppercase">Template Design</h4>
                      <span>Plan</span>
                      <hr className="line-info" />
                    </Col>
                  </Row>
                  <Row>
                    <ListGroup>
                      <ListGroupItem>HTML & CSS</ListGroupItem>
                      <ListGroupItem>Bootstrap and Tailwind</ListGroupItem>
                      <ListGroupItem>24/7 Support</ListGroupItem>
                    </ListGroup>
                  </Row>
                </CardBody>
                <CardFooter className="text-center">
                  <Button className="btn-simple" color="info">
                    Get plan
                  </Button>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}
