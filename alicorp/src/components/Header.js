import React from "react";
import { Link } from "react-router-dom";

import "../css/header.css"

const Header = () => {
  
 
    
  

  return (
    <header>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
        <button
          className="navbar-toggler navbar-togger-right"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon" />
        </button>

        <a class="navbar-brand" href="#">
          <img
            data-testid="imgLogo"
            style={{ maxWidth: "120px", maxHeigth: "120px" }}
            className="logo d-inline-block align-top"
            src="https://i.postimg.cc/3JC9pBnv/1280px-Alicorp.pnghttps://i.postimg.cc/3JC9pBnv/1280px-Alicorp.png"
            alt="logo"
          />
        </a>
        <a class="navbar-brand" href="index.html" />

        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
          <div id="barraNav" className=" d-sm-block d-md-none">
            <ul className="d-xl-block">
              <a className="containerNavList " href="#">
                <li className="listNav ">Home</li>
              </a>
              <a className="containerNavList " href="#">
                <li className="listNav">Features</li>
              </a>
              <a className="containerNavList " href="#">
                <li className="listNav">Cerrar Sesion</li>{" "}
              </a>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};
export default Header;
