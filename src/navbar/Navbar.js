import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import "bootstrap/dist/css/bootstrap.css";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-light bg-light py-3 px-1 px-md-3">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            ConvertKit
          </NavLink>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="/navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ms-auto mb-2 mb-md-0 flex-column-reverse flex-md-row-reverse">
              <li className="nav-item ms-2">
                <NavLink
                  className="nav-link btn-sign"
                  activeClassName="btn-active text-light"
                  to="/signUp"
                >
                  Sign up free
                </NavLink>
              </li>
              <li className="nav-item ms-2">
                <NavLink
                  className="nav-link rounded"
                  activeClassName="btn-active text-light"
                  to="/login"
                >
                  Log in
                </NavLink>
              </li>
              <li className="nav-item dropdown ms-2">
                <NavLink
                  className="nav-link dropdown-toggle rounded"
                  activeClassName="btn-active text-light"
                  to="/"
                  id="navbarScrollingDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Resources
                </NavLink>
                <div
                  className="dropdown-menu"
                  aria-labelledby="navbarScrollingDropdown"
                >
                  <NavLink className="dropdown-item" to="/">
                    NavLink 1
                  </NavLink>
                  <NavLink className="dropdown-item" to="/">
                    NavLink 2
                  </NavLink>
                  <NavLink className="dropdown-item" to="/">
                    NavLink 3
                  </NavLink>
                </div>
              </li>
              <li className="nav-item ms-2">
                <NavLink
                  className="nav-link rounded"
                  activeClassName="btn-active text-light"
                  to="/home"
                >
                  Pricing
                </NavLink>
              </li>
              <li className="nav-item dropdown ms-2">
                <NavLink
                  className="nav-link dropdown-toggle rounded"
                  activeClassName="btn-active text-light"
                  to="/features"
                  id="navbarScrollingDropdown2"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Features
                </NavLink>
                <div
                  className="dropdown-menu"
                  aria-labelledby="navbarScrollingDropdown2"
                >
                  <NavLink className="dropdown-item" to="/">
                    Features 1
                  </NavLink>
                  <NavLink className="dropdown-item" to="/">
                    Features 2
                  </NavLink>
                  <NavLink className="dropdown-item" to="/">
                    Features 3
                  </NavLink>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
