import React from "react";
import { Link } from "react-router-dom";
import { Button, Col, Container, Row } from "reactstrap";
import img from "../../assets/img/icon/icon (1).png";
export default function BlogHeder() {
  return (
    <>
      <div
        className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center "
        style={{
          minHeight: "750px",
          backgroundImage:
            "url(" + require("assets/img/blog/Icon_2.jpg").default + ")",
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      >
        {/* Mask */}
        <span className="mask bg-gradient-default opacity-8" />
        {/* Header container */}
        <Container className="d-flex align-items-center justify-content-center ">
          <Row>
            <Col md="6" className="mt-3">
              <h1 className="display-2 text-white">
                Let's build the future of the web
              </h1>
              <p className="text-white mt-0 mb-5">
                Get the web's modern capabilities on your own sites and apps
                with useful guidance and analysis from
              </p>
              <Button className="btn Blog_btn  btn--with-icon bg-gradient-cyan">
                <Link color="info" to="/project">
                  <i class="btn-icon fa fa-long-arrow-right bg-gradient-blue"></i>{" "}
                  TEST MY PROJECT
                </Link>
              </Button>
            </Col>

            <Col md="6">
              <img className="w-100 h-100 pt-1 floating-lg" src={img} alt="" />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
