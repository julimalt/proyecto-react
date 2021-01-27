import ItemList from "./ItemList";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Loader from "../Loader";

function ItemListContainer({ data }) {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { category } = useParams();

  useEffect(() => {
    setLoading(true);
    if (category) {
      const productosFiltrados = data.filter(
        (producto) => producto.categoryId === category
      );
      setProductos(productosFiltrados);
    } else {
      setProductos(data);
    }
    setLoading(false);
  }, [category, data]);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <div>
          {category ? (
            <h5>Resultados encontrados para {category}...</h5>
          ) : (
            <> </>
          )}
          <ItemList productos={productos} />
        </div>
      )}
    </div>
  );
}

export default ItemListContainer;
