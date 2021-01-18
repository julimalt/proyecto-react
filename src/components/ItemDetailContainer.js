import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { Productos } from "../Data";
import Loader from "../Loader";

function ItemDetailContainer({ setCarrito, carrito }) {
  const [detalles, setDetalles] = useState({});
  const { id } = useParams();

  useEffect(() => {
    getItems.then((resultado) => {
      const item = resultado.find((product) => product.id === parseInt(id));
      setDetalles(item);
    });
  }, [id]);

  const getItems = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(Productos);
    }, 2000);
  });
  return (
    <ItemDetail item={detalles} setCarrito={setCarrito} carrito={carrito} />
  );
}
export default ItemDetailContainer;
