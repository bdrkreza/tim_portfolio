import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  Container,
  Form,
  FormGroup,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Nav,
  Navbar,
  NavItem,
} from "reactstrap";
import UserNav from "../Headers/UserNav";

const AdminNavbar = (props) => {
  return (
    <>
      <Navbar className="navbar-top navbar-dark" expand="md" id="navbar-main">
        <Container fluid>
          <Link
            className="h4 mb-0 text-white text-uppercase d-none d-lg-inline-block"
            to="/"
          >
            {props.brandText}
          </Link>

          <Form className="navbar-search navbar-search-dark form-inline mr-3 d-none d-md-flex ml-lg-auto">
            <FormGroup className="mb-0">
              <Nav className="mt-2">
                <NavItem>
                  <Link to="/">
                    <Button className="nav-link  mr-5 mb-3" color="default">
                      <div className="d-flex align-items-center">
                        <i className="ni ni-shop mb-1" />
                        <p>Home</p>
                      </div>
                    </Button>
                  </Link>
                </NavItem>
              </Nav>
              <InputGroup className="input-group-alternative">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="fas fa-search" />
                  </InputGroupText>
                </InputGroupAddon>
                <Input placeholder="Search" type="text" />
              </InputGroup>
            </FormGroup>
          </Form>
          <Nav className="align-items-center d-none d-md-flex " navbar>
            <UserNav />
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default AdminNavbar;
