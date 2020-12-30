import React, { useState } from "react";  


function ItemCount (){
    
  const [contador, setContador] = useState(0);

  const aumentarContador = () => {
    setContador(contador + 1);
  };

  const restarContador = () => {
    setContador(contador - 1);
  };

  const reiniciarContador = () => {
    setContador(0);
  };

  return ( <div>
    <p>Cantidad : {contador}</p>
    <button onClick={aumentarContador}>+</button>
    <button onClick={reiniciarContador}>Reiniciar</button>
    <button onClick={restarContador}>-</button>
  </div>)
  
}



export default ItemCount;
