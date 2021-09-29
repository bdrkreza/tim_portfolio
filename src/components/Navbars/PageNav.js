import React from "react";
import { Link } from "react-router-dom";
import {
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
} from "reactstrap";
export default function PageNav() {
  return (
    <div>
      <UncontrolledDropdown nav>
        <DropdownToggle
          caret
          color="default"
          data-toggle="dropdown"
          href="#pablo"
          nav
          onClick={(e) => e.preventDefault()}
          className="d-flex align-items-center justify-content-center"
        >
          <i className="tim-icons icon-paper  text-white mr-2" />
          <h4 className="mt-3"> Pages</h4>
        </DropdownToggle>
        <DropdownMenu className="dropdown-with-icons bg-gradient-teal  ml-3 mt-3 ">
          <DropdownItem className="text-white" tag={Link} to="/about">
            <i className="tim-icons icon-paper bg-gradient-darker" />
            About Page
          </DropdownItem>
          <DropdownItem className="text-white" tag={Link} to="/project">
            <i className="tim-icons icon-bullet-list-67 text-darker " />
            Project Page
          </DropdownItem>
          <DropdownItem className="text-white" tag={Link} to="/landing-page">
            <i className="tim-icons icon-image-02 text-darker" />
            Landing Page
          </DropdownItem>
          <DropdownItem className="text-white" tag={Link} to="/blog">
            <i className="tim-icons icon-single-02 text-darker" />
            Blog Page
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    </div>
  );
}
