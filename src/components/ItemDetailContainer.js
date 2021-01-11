import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { Productos } from "../Data";

function ItemDetailContainer({ setCantidad, cantidad }) {
  const [detalles, setDetalles] = useState({});
  const { id } = useParams();

  useEffect(() => {
    getItems.then((resultado) => {
      const item = resultado.find((product) => product.id == id);
      console.log(resultado);
      console.log(id);
      setDetalles(item);
    });
  }, []);

  const getItems = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(Productos);
    }, 2000);
  });
  return (
    <ItemDetail item={detalles} setCantidad={setCantidad} cantidad={cantidad} />
  );
}
export default ItemDetailContainer;
