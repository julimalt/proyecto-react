import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

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
    <div>
      <p>Cantidad : {contador}</p>
      <div class="btn-group" role="group" aria-label="Basic example">
        <button type="button" class="btn btn-primary" onClick={restarContador}>
          -
        </button>
        <button type="button" class="btn btn-primary" onClick={clickAdd}>
          Agregar al carrito
        </button>
        <button
          type="button"
          class="btn btn-primary"
          onClick={aumentarContador}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default ItemCount;
