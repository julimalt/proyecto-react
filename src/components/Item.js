import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Item({ item }) {
  const { id, title, description, price, pictureUrl } = item;
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img
        style={{ maxHeight: "300px", maxWidth: "200px" }}
        src={pictureUrl}
        class="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <p className="card-text">{id}</p>
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <p className="card-text">{price}</p>
        <a href="#" class="btn btn-primary">
          Ver detalles
        </a>
      </div>
    </div>
  );
}

export default Item;
