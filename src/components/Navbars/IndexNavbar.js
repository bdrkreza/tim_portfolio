import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  Col,
  Collapse,
  Container,
  Nav,
  Navbar,
  NavbarBrand,
  NavItem,
  Row,
  UncontrolledTooltip,
} from "reactstrap";
import PageNav from "./PageNav";
import UserMenu from "./UserMenu";

export default function IndexNavbar() {
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  const [collapseOut, setCollapseOut] = React.useState("");
  const [color, setColor] = React.useState("navbar-transparent");
  React.useEffect(() => {
    window.addEventListener("scroll", changeColor);
    return function cleanup() {
      window.removeEventListener("scroll", changeColor);
    };
  }, []);
  const changeColor = () => {
    if (
      document.documentElement.scrollTop > 99 ||
      document.body.scrollTop > 99
    ) {
      setColor("bg-info");
    } else if (
      document.documentElement.scrollTop < 100 ||
      document.body.scrollTop < 100
    ) {
      setColor("navbar-transparent");
    }
  };
  const toggleCollapse = () => {
    document.documentElement.classList.toggle("nav-open");
    setCollapseOpen(!collapseOpen);
  };
  const onCollapseExiting = () => {
    setCollapseOut("collapsing-out");
  };
  const onCollapseExited = () => {
    setCollapseOut("");
  };

  return (
    <div>
      <Navbar
        className={"fixed-top " + color}
        color-on-scroll="100"
        expand="lg"
      >
        <Container>
          <div className="navbar-translate">
            <NavbarBrand to="/" tag={Link} id="navbar-brand">
              <span>rkreza </span>
            </NavbarBrand>

            <UncontrolledTooltip placement="bottom" target="navbar-brand">
              Md RezaulKarim
            </UncontrolledTooltip>
            <button
              aria-expanded={collapseOpen}
              className="navbar-toggler navbar-toggler"
              onClick={toggleCollapse}
            >
              <span className="navbar-toggler-bar bar1" />
              <span className="navbar-toggler-bar bar2" />
              <span className="navbar-toggler-bar bar3" />
            </button>
          </div>
          <Collapse
            className={"justify-content-end bg-info " + collapseOut}
            navbar
            isOpen={collapseOpen}
            onExiting={onCollapseExiting}
            onExited={onCollapseExited}
          >
            <div className="navbar-collapse-header  ">
              <Row>
                <Col className="collapse-brand" xs="6">
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    RezaulKarim
                  </a>
                </Col>
                <Col className="collapse-close text-right" xs="6">
                  <button
                    aria-expanded={collapseOpen}
                    className="navbar-toggler"
                    onClick={toggleCollapse}
                  >
                    <i className="tim-icons icon-simple-remove text-danger" />
                  </button>
                </Col>
              </Row>
            </div>

            <Nav navbar>
              <NavItem>
                <Link to="/">
                  <Button className="nav-link  d-lg-block" color="default">
                    <i className="ni ni-shop mb-2" />
                    Home
                  </Button>
                </Link>
              </NavItem>

              <NavItem>
                <Link to="/project">
                  <Button className="nav-link  d-lg-block" color="default">
                    <i className="tim-icons icon-cloud-download-93" />
                    Project
                  </Button>
                </Link>
              </NavItem>

              <NavItem>
                <Link to="/blog">
                  <Button className="nav-link  d-lg-block" color="default">
                    <i className="tim-icons icon-cloud-download-93" />
                    Blog
                  </Button>
                </Link>
              </NavItem>

              <NavItem>
                <Link to="/contact">
                  <Button className="nav-link  d-lg-block" color="default">
                    <i className="tim-icons icon-cloud-download-93" />
                    Contact
                  </Button>
                </Link>
              </NavItem>
            </Nav>
            <PageNav />
            <div className="mr-5">
              <UserMenu />
            </div>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
