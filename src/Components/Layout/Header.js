import React, { useState, useEffect } from "react";

//components
import Dashboard from "../Pages/Dashboard";
import Courses from "../Pages/Courses";

import { Router, Route } from "react-router-dom";
import { createBrowserHistory as createHistory } from "history";
import { AmplifySignOut } from "@aws-amplify/ui-react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
import Cohorts from "../Pages/Cohorts";

const history = createHistory();

const Header = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    if (props && props.user && props.user.username == "test1") {
      setIsAdmin(true);
    }
  }, [isAdmin]);

  const toggle = () => setDropdownOpen(!dropdownOpen);
  return (
    <div>
      <div>
        <Router history={history}>
          <Navbar color="dark">
            <NavbarBrand href="/" className="text-white">
              Classroom
            </NavbarBrand>
            {isAdmin ? (
              <Nav>
                <NavItem>
                  <NavLink className="text-white" href="/">
                    Dashboard
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="text-white" href="/courses">
                    Courses
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="text-white" href="/cohorts">
                    Cohorts
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="text-white" href="/findimage">
                    Zoom
                  </NavLink>
                </NavItem>
              </Nav>
            ) : (
              ""
            )}
            <NavItem className="text-white ">
              <i className="fa fa-user " aria-hidden="true"></i>
              &nbsp;
              {props.user.username} &nbsp;
            </NavItem>
            <AmplifySignOut />
          </Navbar>
          <Route path="/" exact component={Dashboard} />
          <Route path="/courses" exact component={Courses} />
          <Route path="/cohorts" exact component={Cohorts} />
        </Router>
      </div>
    </div>
  );
};

export default Header;
