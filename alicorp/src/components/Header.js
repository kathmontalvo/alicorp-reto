import React from "react";
//import { Link } from "react-router-dom";

import "../css/header.css";

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-md navbar-dark color fixed-top">
        <button
          className="navbar-toggler navbar-togger-right"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <a className="navbar-brand" href="#">
          <img
            data-testid="imgLogo"
            style={{ maxWidth: "100px", maxHeigth: "100px" }}
            className="logo d-inline-block align-top"
            src="https://i.postimg.cc/qvqmHQNy/image.png"
            alt="logo"
          />
        </a>

        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
          <div id="barraNav" className="d-sm-block d-md-none">
            <ul className="nav d-xl-block">
              <li className="nav-item containerNavList">
                <a className="nav-link active listNav" href="#">
                  Active
                </a>
              </li>
              <li class="nav-item containerNavList">
                <a class="nav-link listNav" href="#!">
                  Link
                </a>
                
              </li>
              <li class="nav-item containerNavList">
                <a class="nav-link active listNav" href="#">
                  Active
                </a>
              </li>
              
              <li class="nav-item containerNavList">
                <a class="nav-link listNav" href="#!">
                  Cerrar Sesion
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};
export default Header;
