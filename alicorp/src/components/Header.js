import React from "react";
import { Link } from "react-router-dom";

import "../css/header.css";

const Header = () => {
  const navBarDropDown = () => {};

  return (
    <header>
      <nav class="navbar navbar-expand-md navbar-dark bg-dark">
        <div class="d-flex justify-content-around">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon" />
          </button>

          <a class="navbar-brand navbar-toggler-right" href="#">
            <img
              data-testid="imgLogo"
              style={{ maxWidth: "120px", maxHeigth: "100px" }}
              className="logo d-inline-block align-top"
              src="https://i.postimg.cc/3JC9pBnv/1280px-Alicorp.pnghttps://i.postimg.cc/3JC9pBnv/1280px-Alicorp.png"
              alt="logo"
            />
          </a>
          
        </div>

        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
          <div id="barraNav">
            <ul className="containerNavList">
              <a className="containerNavList" href="#">
                <li className="listNav">Home</li>
              </a>
              <a className="containerNavList" href="#">
                <li className="listNav">Features</li>
              </a>
              <a className="containerNavList" href="#">
                <li className="listNav">Cerrar Sesion</li>
              </a>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};
export default Header;
