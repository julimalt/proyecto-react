import ItemList from "./ItemList";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Productos } from "../Data";

import Loader from "../Loader";

function ItemListContainer({ data, loading }) {
  const [productos, setProductos] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    if (category) {
      const productosFiltrados = data.filter(
        (producto) => producto.categoryId === category
      );
      setProductos(productosFiltrados);
    } else {
      setProductos(data);
    }
  }, [category]);

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
