import React from "react";
import { Link } from "react-router-dom";

import "../css/header.css"

<<<<<<< HEAD
const Header = () => (
  <header>
    <Link to="/">
     <img
        data-testid="imgLogo"
        style={{maxWidth:"20%" ,margin:"20px"}}
        className="logo"
        src="https://i.postimg.cc/3JC9pBnv/1280px-Alicorp.pnghttps://i.postimg.cc/3JC9pBnv/1280px-Alicorp.png"
        alt="logo"
      ></img>
    </Link>
  </header>
);
=======
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
>>>>>>> c7c75db7efa19221de6a6e39f3b49979ae019541
export default Header;
