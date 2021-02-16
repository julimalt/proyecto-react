import React from "react";
import "../Style.css";
import { Link } from "react-router-dom";

function Modal() {
  return (
    <div id="container">
      <div id="success-box">
        <div className="dot"></div>
        <div className="dot two"></div>
        <div className="face">
          <div className="eye"></div>
          <div className="eye right"></div>
          <div className="mouth happy"></div>
        </div>
        <div className="shadow scale"></div>
        <div className="message">
          <h1 className="alert">Exito!</h1>
          <p>
            Tu compra fue realizada, siguiendo el botón podes ver el detalle.
          </p>
        </div>
        <Link to="/Orders">
          <button className="button-box">
            <h1 className="green">continue</h1>
          </button>
        </Link>
      </div>
    </div>
  );
}
export default Modal;
