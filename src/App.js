import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import ItemCount from "./components/ItemCount";
import ItemListContainer from "./components/ItemListContainer";
import React, { useState } from "react";

function App() {
  const [cantidadPedida, setCantidadPedida] = useState(0);
  const [stock, setStock] = useState(5);
  const agregarAlCarrito = (cantidad) => {
    if (stock >= cantidad) {
      setCantidadPedida(cantidadPedida + cantidad);
      setStock(stock - cantidad);
    }
  };
  return (
    <div>
      <NavBar cantidad={cantidadPedida} />
      <ItemListContainer greeting="Aca pondría mis productos, si tuviera alguno" />
      <ItemCount stock={stock} initial="0" onAdd={agregarAlCarrito} />
    </div>
  );
}

export default App;
