import React, { useState, useEffect } from "react";
import Item from "./Item";
import { Productos } from "../Data";

function ItemList() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    obtenerProductos.then((resultado) => setProductos(resultado));
  }, []);

  //Si bien setTimeout se comporta como una promise, cree la Promise obtenerProductos para cumplir con crear una Promise
  const obtenerProductos = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(Productos);
    }, 2000);
  });

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr 1fr",
        gridGap: "10px",
        padding: "30px",
      }}
    >
      {productos.map((producto) => (
        <Item item={producto} />
      ))}
    </div>
  );
}
export default ItemList;
