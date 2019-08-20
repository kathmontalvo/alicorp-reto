import React from "react";
import { Link } from "react-router-dom";


const Header = () => (
  <header>
    <Link to="/">
     <img
        data-testid="imgLogo"
        style={{maxWidth: '50%'}}
        className="logo"
        src="https://i.postimg.cc/3JC9pBnv/1280px-Alicorp.pnghttps://i.postimg.cc/3JC9pBnv/1280px-Alicorp.png"
        alt="logo"
      ></img>
    </Link>
  </header>
);
export default Header;
