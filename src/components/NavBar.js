import React from "react";
import Carrito from "./CartWidget";
import "../Style.css";

function NavBar({ cantidad }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark red">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <a className="navbar-brand" href="/">
          <img className="logo" src="https://i.imgur.com/yuqFte5.png" />
        </a>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Inicio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="/">
                Productos
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active"
                href="#"
                tabindex="-1"
                aria-disabled="true"
              >
                Contacto
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active"
                href="#"
                tabindex="-1"
                aria-disabled="true"
              >
                Sobre Nosotros
              </a>
            </li>
          </ul>
          <Carrito cantidad={cantidad} />
          <form className="d-flex">
            <input
              className="form-control mx-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Buscar
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}
export default NavBar;
