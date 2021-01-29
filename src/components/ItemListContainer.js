import ItemList from "./ItemList";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { firestore } from "../firebaseconfig";
import Loader from "../Loader";

function ItemListContainer() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { category } = useParams();

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

  const obtenerProductos = new Promise((resolve, reject) => {
    const db = firestore;
    const collection = db.collection("items");
    const query = collection.get();
    query
      .then((result) => {
        const collectionItems = result.docs.map((p) => ({
          id: p.id,
          ...p.data(),
        }));
        resolve(collectionItems);
      })
      .catch((error) => {
        reject(error);
      });
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
