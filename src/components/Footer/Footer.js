import IconsButton from "components/Button/IconsButton";
import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Col,
  Container,
  Nav,
  NavbarBrand,
  NavItem,
  NavLink,
  Row,
} from "reactstrap";
import brandIcon from "../../assets/img/icon/LogoMakr6.png";

export default function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md="3" sm="3">
            <NavbarBrand
              to="/"
              tag={Link}
              id="navbar-brand"
              className=" text-center"
            >
              <img src={brandIcon} className="w-75" alt="" />
            </NavbarBrand>
          </Col>
          <Col md="3" sm="3">
            <Nav>
              <NavItem>
                <NavLink to="/" tag={Link}>
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/landing-page" tag={Link}>
                  Landing
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/service" tag={Link}>
                  Service
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/project" tag={Link}>
                  Project
                </NavLink>
              </NavItem>
            </Nav>
          </Col>
          <Col md="3" sm="3">
            <Nav>
              <NavItem>
                <NavLink to="/about" tag={Link}>
                  Profile
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/contact" tag={Link}>
                  Contact Us
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/about" tag={Link}>
                  About Us
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink to="/blog" tag={Link}>
                  Blog
                </NavLink>
              </NavItem>
            </Nav>
          </Col>
          <Col md="3" sm="3">
            <h3 className="title">Follow us:</h3>
            <div className="btn-wrapper profile">
              <IconsButton />
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
