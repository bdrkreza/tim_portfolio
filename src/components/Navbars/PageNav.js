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
        >
          <i className="tim-icons icon-paper" />
          Pages
        </DropdownToggle>
        <DropdownMenu className="dropdown-with-icons bg-gradient-indigo mt-3 ">
          <DropdownItem className="text-white" tag={Link} to="/about">
            <i className="tim-icons icon-paper" />
            About Page
          </DropdownItem>
          <DropdownItem className="text-white" tag={Link} to="/project">
            <i className="tim-icons icon-bullet-list-67" />
            Project Page
          </DropdownItem>
          <DropdownItem className="text-white" tag={Link} to="/landing-page">
            <i className="tim-icons icon-image-02" />
            Service Page
          </DropdownItem>
          <DropdownItem className="text-white" tag={Link} to="/blog">
            <i className="tim-icons icon-single-02" />
            Blog Page
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    </div>
  );
}
