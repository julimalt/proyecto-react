import React, { useContext, Fragment } from "react";
import Carrito from "./CartWidget";
import "../Style.css";
import { CartContext } from "../CartContext";
import { Link } from "react-router-dom";

function NavBar() {
  const { getCartQuantity } = useContext(CartContext);

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
        <Link className="navbar-brand" to="/">
          <img className="logo" src="https://i.imgur.com/yuqFte5.png" alt="" />
        </Link>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/category/Comics">
                Comics
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active"
                to="/category/Coleccionables"
                aria-disabled="true"
              >
                Coleccionables
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active"
                to="/category/Merchandising"
                aria-disabled="true"
              >
                Merchandising
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active"
                to="/orders"
                aria-disabled="true"
              >
                Mis Compras
              </Link>
            </li>
          </ul>
          {getCartQuantity() < 1 ? (
            <Fragment />
          ) : (
            <Carrito cantidad={getCartQuantity()} />
          )}
        </div>
      </div>
    </nav>
  );
}
export default NavBar;
