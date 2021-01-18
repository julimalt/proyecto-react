import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemCount from "./ItemCount";

function ItemDetail({ item, setCarrito, carrito }) {
  const [stock, setStock] = useState(5);
  const [agregado, setAgregado] = useState(false);
  const agregarAlCarrito = (cantidadSolicitada) => {
    if (stock >= cantidadSolicitada) {
      setCarrito(...carrito, {
        ...item,
        cantidadSolicitada: cantidadSolicitada,
      });
      setStock(stock - cantidadSolicitada);
      setAgregado(true);
    }
  };
  const { title, autors, description, price, pictureUrl } = item;
  return (
    <div className="card mb-3" style={{ maxHeight: "500px" }}>
      <div className="row g-0">
        <div className="col-md-6">
          <img
            src={pictureUrl}
            style={{ maxHeight: "400px" }}
            alt="Imagen Producto"
          />
        </div>
        <div className="col-md-6">
          <div className="card-body">
            <h3 className="card-title">{title}</h3>
            <p className="card-text">{autors}</p>
            <p className="card-text">{description}</p>
            <p className="card-text price">{price}</p>
            {agregado ? (
              <div>
                <a href="/cart" className="btn btn-primary">
                  Terminar compra
                </a>
              </div>
            ) : (
              <div className="price">
                <ItemCount stock={stock} initial="0" onAdd={agregarAlCarrito} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
export default ItemDetail;
