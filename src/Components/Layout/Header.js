import React, { useState } from "react";

//components
import Dashboard from "../Pages/Dashboard";
// import Upload from "../Upload";

import { Router, Route } from "react-router-dom";
import { createBrowserHistory as createHistory } from "history";
import { AmplifySignOut } from "@aws-amplify/ui-react";
import "bootstrap/dist/css/bootstrap.min.css";
// import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
import DashboardIcon from "@material-ui/icons/Dashboard";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import PersonIcon from "@material-ui/icons/Person";

import {
  Navbar,
  Nav,
  NavItem,
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
  NavLink,
} from "reactstrap";
const history = createHistory();

const Header = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(!dropdownOpen);
  return (
    <div>
      <Router history={history}>
        <Navbar color="light">
          <Nav>
            <NavItem>
              <DashboardIcon />
              <NavLink className="text-dark " href="/dashboard" active selected>
                Dashboard
              </NavLink>
            </NavItem>
            <NavItem>
              <DashboardIcon />
              <NavLink className="text-dark " href="/dashboard" active selected>
                Dashboard
              </NavLink>
            </NavItem>
            <NavItem className="text-white ">
              <i className="fa fa-user " aria-hidden="true"></i>
              &nbsp;
              {props.user.username} &nbsp;
            </NavItem>
          </Nav>

          <AmplifySignOut />
        </Navbar>

        <Route path="/dashboard" exact component={Dashboard} />
        <Route path="/upload" exact component="" />
      </Router>
    </div>
  );
};

export default Header;
