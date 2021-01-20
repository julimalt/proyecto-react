import React from "react";
import Image from "./Image.svg";

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
      <a href="/cart">
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
      </a>
    </div>
  );
}

export default Carrito;
