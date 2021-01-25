import React from "react";
import Image from "./Image.svg";
import { Link } from "react-router-dom";
import CartContext from "../CartContext";

function Carrito({ cantidad }) {
  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Link to="/cart">
        <img style={{ height: "32px" }} src={Image} alt="Carrito" />{" "}
        <span
          style={{
            position: "absolute",
            fontSize: "15px",
            bottom: "10px",
            left: "15px",
            fontWeight: "bold",
          }}
        >
          {cantidad}
        </span>
      </Link>
    </div>
  );
}

export default Carrito;
