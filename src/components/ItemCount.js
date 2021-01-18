import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Style.css";

function ItemCount({ stock, initial, onAdd }) {
  const [contador, setContador] = useState(parseInt(initial));

  const aumentarContador = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };

  const clickAdd = () => {
    onAdd(contador);
    setContador(parseInt(initial));
  };

  const restarContador = () => {
    if (contador > parseInt(initial)) {
      setContador(contador - 1);
    }
  };

  return (
    <div className="contador">
      <p>Cantidad : {contador}</p>
      <div className="btn-group" role="group" aria-label="Basic example">
        <button
          type="button"
          className="btn btn-primary"
          onClick={restarContador}
        >
          -
        </button>
        <button type="button" className="btn btn-primary" onClick={clickAdd}>
          Agregar al carrito
        </button>
        <button
          type="button"
          className="btn btn-primary"
          onClick={aumentarContador}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default ItemCount;
