import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Row,
  UncontrolledTooltip,
} from "reactstrap";

export default function Contact() {
  return (
    <div>
      <section className="section">
        <Container>
          <Row>
            <Col md="6">
              <Card className="card-plain">
                <CardHeader>
                  <h1 className="profile-title text-left">Contact</h1>
                  <h5 className="text-on-back">03</h5>
                </CardHeader>
                <CardBody>
                  <Form>
                    <Row>
                      <Col md="6">
                        <FormGroup>
                          <label>Your Name</label>
                          <Input placeholder="Rezaul Karim" type="text" />
                        </FormGroup>
                      </Col>
                      <Col md="6">
                        <FormGroup>
                          <label>Email address</label>
                          <Input placeholder="diureza@email.com" type="email" />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="6">
                        <FormGroup>
                          <label>Phone</label>
                          <Input placeholder="+088 01789-380336" type="text" />
                        </FormGroup>
                      </Col>
                      <Col md="6">
                        <FormGroup>
                          <label>Company</label>
                          <Input placeholder="rkreza" type="text" />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="12">
                        <FormGroup>
                          <label>Message</label>
                          <Input placeholder="Hello there!" type="text" />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Button
                      className="btn-round float-right"
                      color="primary"
                      data-placement="right"
                      id="tooltip341148792"
                      type="button"
                    >
                      Send text
                    </Button>
                    <UncontrolledTooltip
                      delay={0}
                      placement="right"
                      target="tooltip341148792"
                    >
                      Can't wait for your message
                    </UncontrolledTooltip>
                  </Form>
                </CardBody>
              </Card>
            </Col>
            <Col className="ml-auto" md="4">
              <div className="info info-horizontal">
                <div className="icon icon-primary">
                  <i className="tim-icons icon-square-pin" />
                </div>
                <div className="description">
                  <h4 className="info-title">Find us at the office</h4>
                  <p>
                    Farmgate,Tejgaon,Dhaka <br />
                    1207 Khamarbari, <br />
                    Bangladesh
                  </p>
                  <p className="h4 text-cyan"> rkreza2020@gmail.com</p>
                </div>
              </div>
              <div className="info info-horizontal">
                <div className="icon icon-primary">
                  <i className="tim-icons icon-mobile" />
                </div>
                <div className="description">
                  <h4 className="info-title">Give us a ring</h4>
                  <p>
                    Md Rezaul Karim <br />
                    <span className="text-cyan"> +880 01632-020202 </span>
                    <br />
                    Mon - Fri, 10:00-10:00
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}
