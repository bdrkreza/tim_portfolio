import React from "react";
import { Link } from "react-router-dom";
import {
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Media,
  UncontrolledDropdown,
} from "reactstrap";
export default function UserNav() {
  return (
    <div>
      <UncontrolledDropdown nav>
        <DropdownToggle className="pr-0 " nav>
          <Media className="align-items-center">
            <span className="avatar avatar-sm rounded-circle">
              <img
                alt="..."
                src={
                  require("../../assets/img/theme/team-4-800x800.jpg").default
                }
              />
            </span>
            <Media className="ml-2 d-none d-lg-block">
              <span className="mb-0 text-sm font-weight-bold">
                Jessica Jones
              </span>
            </Media>
          </Media>
        </DropdownToggle>
        <DropdownMenu
          className="dropdown-menu-arrow bg-gradient-green  w-100"
          right
        >
          <DropdownItem className="noti-title bg-dark" header tag="div">
            <h6 className="text-overflow m-0">Welcome!</h6>
          </DropdownItem>

          <DropdownItem
            to="/admin/user-profile"
            className="text-dark"
            tag={Link}
          >
            <i className="ni ni-single-02" />
            <span>My profile</span>
          </DropdownItem>
          <DropdownItem
            to="/admin/user-profile"
            className="text-dark"
            tag={Link}
          >
            <i className="ni ni-settings-gear-65" />
            <span>Settings</span>
          </DropdownItem>
          <DropdownItem
            to="/admin/user-profile"
            className="text-dark"
            tag={Link}
          >
            <i className="ni ni-calendar-grid-58" />
            <span>Activity</span>
          </DropdownItem>
          <DropdownItem
            to="/admin/user-profile"
            className="text-dark"
            tag={Link}
          >
            <i className="ni ni-support-16" />
            <span>Support</span>
          </DropdownItem>
          <DropdownItem divider />
          <DropdownItem
            href="#pablo"
            className="text-dark"
            onClick={(e) => e.preventDefault()}
          >
            <i className="ni ni-user-run" />
            <span>Logout</span>
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    </div>
  );
}
