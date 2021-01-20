import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { Productos } from "../Data";
import Loader from "../Loader";

function ItemDetailContainer() {
  const [detalles, setDetalles] = useState({});
  const { id } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getItems.then((resultado) => {
      const item = resultado.find((product) => product.id === parseInt(id));
      setDetalles(item);
      setLoading(false);
    });
  }, [id]);

  const getItems = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(Productos);
    }, 2000);
  });

  return <div>{loading ? <Loader /> : <ItemDetail item={detalles} />}</div>;
}
export default ItemDetailContainer;
