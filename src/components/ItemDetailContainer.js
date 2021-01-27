import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { Productos } from "../Data";
import Loader from "../Loader";

function ItemDetailContainer({ data }) {
  const [detalles, setDetalles] = useState({});
  const { id } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const item = data.find((product) => product.id === parseInt(id));
    setDetalles(item);
    setLoading(false);
  }, [id]);

  return <div>{loading ? <Loader /> : <ItemDetail item={detalles} />}</div>;
}

export default ItemDetailContainer;
