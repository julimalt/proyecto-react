import ItemList from "./ItemList";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Productos } from "../Data";
import Loader from "../Loader";

function ItemListContainer() {
  const [productos, setProductos] = useState([]);
  const { category } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    obtenerProductos.then((resultado) => {
      if (category) {
        const productosFiltrados = resultado.filter(
          (producto) => producto.categoryId === category
        );
        setProductos(productosFiltrados);
      } else {
        setProductos(resultado);
      }
      setLoading(false);
    });
  }, [category]);

  //Si bien setTimeout se comporta como una promise, cree la Promise obtenerProductos para cumplir con crear una Promise

  const obtenerProductos = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(Productos);
    }, 2000);
  });
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
