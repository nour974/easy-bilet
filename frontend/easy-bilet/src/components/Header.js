import React from "react";

function Header() {
  return (
    <header id="header">
      <div className="container d-flex justify-content-between h-100">
        <h3>EasyBilet.com</h3>
        <ul className="d-flex h-100 list-unstyled bread-crumb">
          <li>Üye Giriş</li>
          <li>Seyahatlarım</li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
