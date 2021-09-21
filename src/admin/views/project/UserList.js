import React from "react";
import {
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Row,
} from "reactstrap";

export default function UserList() {
  const [searchFocus, setSearchFocus] = React.useState(false);
  const [birthdayFocus, setBirthdayFocus] = React.useState(false);
  return (
    <div>
      <div
        className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
        style={{
          minHeight: "600px",
          backgroundImage:
            "url(" +
            require("../../assets/img/theme/profile-cover.jpg").default +
            ")",
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      >
        {/* Mask */}
        <span className="mask bg-gradient-default opacity-8" />
        {/* Header container */}
        <Container className="d-flex align-items-center" fluid>
          <Row>
            <Col lg="12">
              <Form className="mt-5">
                <Row>
                  <Col md="6">
                    <FormGroup>
                      <Input
                        id="exampleFormControlInput1"
                        placeholder="name@example.com"
                        type="email"
                      ></Input>
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <Input disabled placeholder="Regular" type="text"></Input>
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col md="6">
                    <FormGroup className={searchFocus ? "focused" : ""}>
                      <InputGroup className=" mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className=" ni ni-zoom-split-in"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          placeholder="Search"
                          type="text"
                          onFocus={() => setSearchFocus(true)}
                          onBlur={() => setSearchFocus(false)}
                        ></Input>
                      </InputGroup>
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup className={birthdayFocus ? "focused" : ""}>
                      <InputGroup className=" mb-4">
                        <Input
                          placeholder="Birthday"
                          type="text"
                          onFocus={() => setBirthdayFocus(true)}
                          onBlur={() => setBirthdayFocus(false)}
                        ></Input>
                        <InputGroupAddon addonType="append">
                          <InputGroupText>
                            <i className=" ni ni-zoom-split-in"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                      </InputGroup>
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col md="6">
                    <FormGroup className=" has-success">
                      <Input
                        className=" is-valid"
                        placeholder="Success"
                        type="text"
                      ></Input>
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup className=" has-danger">
                      <Input
                        className=" is-invalid"
                        placeholder="Error Input"
                        type="email"
                      ></Input>
                    </FormGroup>
                  </Col>
                </Row>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
