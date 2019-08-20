import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <header>
    <Link to="/">
     <img
        data-testid="imgLogo"
        className="center pb-2 pt-1 img-logo"
        src="https://i.postimg.cc/3JC9pBnv/1280px-Alicorp.pnghttps://i.postimg.cc/3JC9pBnv/1280px-Alicorp.png"
        alt="logo"
      ></img>
    </Link>
  </header>
);
export default Header;
