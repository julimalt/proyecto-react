import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Style.css";

function Item({ item }) {
  const { id, title, autors, price, pictureUrl, category } = item;
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img
        style={{ maxHeight: "200px", maxWidth: "100px" }}
        src={pictureUrl}
        class="card-img-top"
        alt="..."
      />
      <div className="card-body primera">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{autors}</p>
        <p className="card-text price">{price}</p>
        <a href={`/item/${id}`} class="btn btn-primary centrado">
          Ver detalles
        </a>
      </div>
    </div>
  );
}

export default Item;
