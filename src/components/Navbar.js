import React from "react";
import Logo from "./Logo";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg sticky-top"
      style={{ backgroundColor: "#042743" }}
      data-bs-theme="dark"
    >
      <div className="container-fluid container">
        <span className="navbar-brand">
          <Link to="/">{<Logo />}</Link>
        </span>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-link" aria-current="page" to="/">
              Home
            </Link>
            <Link className="nav-link" to="/blogs">
              Blogs
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
