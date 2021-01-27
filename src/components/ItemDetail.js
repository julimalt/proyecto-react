import React, { useState, useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemCount from "./ItemCount";
import { CartContext } from "../CartContext";
import { Link } from "react-router-dom";

function ItemDetail({ item }) {
  const { addItem } = useContext(CartContext);

  const [stock, setStock] = useState(5);

  const [agregado, setAgregado] = useState(false);

  const { title, autors, description, price, pictureUrl } = item;

  const agregarAlCarrito = (cantidadSolicitada) => {
    if (stock >= cantidadSolicitada) {
      addItem({
        item: item,
        cantidad: cantidadSolicitada,
      });
      setStock(stock - cantidadSolicitada);
      setAgregado(true);
    }
  };
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
            <p className="card-text price">$ {price}</p>
            {agregado ? (
              <div>
                <Link to="/cart" className="btn btn-primary">
                  Terminar compra
                </Link>
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
