import React from "react";
import { BrowserRouter, Link, NavLink, Route, Routes } from "react-router-dom";
import Login from "./Login";

function Header() {
  return (
    <header id="header">
      <div className=" head-1">
       <div className="d-flex justify-content-between h-100 container">
        <h3>EasyBilet.com</h3>
        <ul className="d-flex h-100 list-unstyled bread-crumb">
          <li>
            <NavLink to={"login"}>Üye Giriş</NavLink>
          </li>
          <li>
            <NavLink to={"seyahatlarim"}>Seyahatlarım</NavLink>
          </li>
        </ul>
      </div>
      </div>
      <nav className="color-dark head-2">
        <ul className="container list-unstyled ">
          <li>
            <Link to={"bilet-al"}>Otobüs</Link>
          </li>
          {/* <li>Uçak</li> */}
        </ul>
      </nav>
      <br />
    </header>
  );
}

export default Header;
