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
import brandIcon from "../../assets/img/icon/LogoMakr8.png";
import PageNav from "./PageNav";
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
      setColor(" bg-info");
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
        <Container className="d-flex justify-content-between align-items-center  ">
          <div className="navbar-translate">
            <NavbarBrand to="/" tag={Link} id="navbar-brand" className="">
              <img src={brandIcon} className="w-50 mt--2" alt="" />
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
            className={
              "justify-content-end bg-gradient-cyan  nav_bar" + collapseOut
            }
            navbar
            isOpen={collapseOpen}
            onExiting={onCollapseExiting}
            onExited={onCollapseExited}
          >
            <div className="navbar-collapse-header  ">
              <Row>
                <Col className="collapse-brand" xs="6">
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    RK REZA
                  </a>
                </Col>
                <Col className="collapse-close text-right" xs="6">
                  <button
                    aria-expanded={collapseOpen}
                    className="navbar-toggler"
                    onClick={toggleCollapse}
                  >
                    <i className="tim-icons icon-simple-add text-danger" />
                  </button>
                </Col>
              </Row>
            </div>

            <Nav navbar>
              <NavItem>
                <Link to="/">
                  <Button className="nav-link" color="default">
                    {/* <i className="ni ni-shop mb-2" /> */}
                    <a href="">Home</a>
                  </Button>
                </Link>
              </NavItem>

              <NavItem className="nav_item">
                <Link to="/project">
                  <Button className="nav-link  d-lg-block" color="default">
                    {/* <i className="tim-icons icon-cloud-download-93" /> */}
                    <a href=""> Project</a>
                  </Button>
                </Link>
              </NavItem>

              <NavItem>
                <Link to="/blog">
                  <Button className="nav-link  d-lg-block" color="default">
                    {/* <i className="tim-icons icon-cloud-download-93" /> */}
                    <a href="">Blogs</a>
                  </Button>
                </Link>
              </NavItem>

              <NavItem>
                <Link to="/about">
                  <Button className="nav-link  d-lg-block" color="default">
                    {/* <i className="tim-icons icon-cloud-download-93" /> */}
                    <a href=""> ABOUT</a>
                  </Button>
                </Link>
              </NavItem>

              <NavItem>
                <Link to="/service">
                  <Button className="nav-link  d-lg-block" color="default">
                    {/* <i className="tim-icons icon-cloud-download-93" /> */}
                    <a href=""> Service</a>
                  </Button>
                </Link>
              </NavItem>
            </Nav>
            <div className="page_btn">
              <PageNav />
            </div>
            <div className="mr-5"></div>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
