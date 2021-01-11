import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemCount from "./ItemCount";

function ItemDetail({ item, setCantidad, cantidad }) {
  const [stock, setStock] = useState(5);
  const agregarAlCarrito = (cantidadSolicitada) => {
    if (stock >= cantidadSolicitada) {
      setCantidad(cantidad + cantidadSolicitada);
      setStock(stock - cantidadSolicitada);
    }
  };
  const { title, autors, description, price, pictureUrl } = item;
  return (
    <div className="card mb-3" style={{ maxHeight: "500px" }}>
      <div className="row g-0">
        <div className="col-md-6">
          <img src={pictureUrl} style={{ maxHeight: "400px" }} />
        </div>
        <div className="col-md-6">
          <div className="card-body">
            <h3 className="card-title">{title}</h3>
            <p className="card-text">{autors}</p>
            <p className="card-text">{description}</p>
            <p className="card-text price">{price}</p>
            <div className="price">
              <ItemCount stock={stock} initial="0" onAdd={agregarAlCarrito} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ItemDetail;
