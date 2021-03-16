import React from "react";
import "./index.css";
import { Link, NavLink } from "react-router-dom";

function Header(props) {
  return (
    <div className="fixed-top">
      <header className="topbar">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <ul className="social-network">
                <li>
                  <Link
                    className="waves-effect waves-dark"
                    to="/"
                    activeStyle={{
                      fontWeight: "bold",
                      color: "red",
                    }}
                  >
                    <i className="fa fa-facebook"></i>
                  </Link>
                </li>
                <li>
                  <Link className="waves-effect waves-dark" href="#">
                    <i className="fa fa-twitter"></i>
                  </Link>
                </li>
                <li>
                  <Link className="waves-effect waves-dark" href="#">
                    <i className="fa fa-linkedin"></i>
                  </Link>
                </li>
                <li>
                  <Link className="waves-effect waves-dark" href="#">
                    <i className="fa fa-pinterest"></i>
                  </Link>
                </li>
                <li>
                  <Link className="waves-effect waves-dark" href="#">
                    <i className="fa fa-google-plus"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      <nav className="navbar navbar-expand-lg navbar-dark mx-background-top-linear">
        <div className="container">
          <Link
            className="navbar-brand"
            href="index.html"
            // style="text-transform: uppercase;"
          >
            LACODEID.COM
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <NavLink className="nav-link" to="/">
                  Home
                  <span className="sr-only">(current)</span>
                </NavLink>
              </li>

              <li className="nav-item">
                <Link className="nav-link" href="#">
                  About
                </Link>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/news">
                  News Girl
                </NavLink>
              </li>

              <li className="nav-item">
                <Link className="nav-link" href="#">
                  Sea food
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" href="#">
                  Vegetables
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" href="#">
                  Blog
                </Link>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
