import React, { useState } from "react";

export const CartContext = React.createContext();

function CartProvider({ children }) {
  const [carrito, setCarrito] = useState([]);
  const [cantidad, setCantidad] = useState(0);
  const [total, setTotal] = useState(0);

  function setCartValues() {
    var totalCosto = 0;
    console.log("carrito: ", carrito);
    const totalesProducto = carrito.map((p) => p.item.price * p.cantidad);

    totalesProducto.map((precioItem) => (totalCosto = totalCosto + precioItem));

    setTotal(totalCosto);

    const carritoCantidad = carrito.reduce(
      (acumulador, producto) => acumulador + producto.cantidad,
      0
    );

    setCantidad(carritoCantidad);
  }

  function addItem(productoAAgregar) {
    if (isInCart(productoAAgregar)) {
      const itemEnCarrito = carrito.find(
        (producto) => producto.item.id === productoAAgregar.item.id
      );
      const carritoFiltrado = carrito.filter(
        (producto) => producto.item.id !== productoAAgregar.item.id
      );
      itemEnCarrito.cantidad =
        itemEnCarrito.cantidad + productoAAgregar.cantidad;

      setCarrito([...carritoFiltrado, itemEnCarrito]);
    } else {
      setCarrito([...carrito, productoAAgregar]);
    }
  }

  function removeItem(productoARemover) {
    if (isInCart(productoARemover)) {
      const carritoActualizado = carrito.filter(
        (producto) => producto.item.id !== productoARemover.item.id
      );

      setCarrito(carritoActualizado);
    }
  }

  function clear() {
    setCarrito([]);
  }

  function isInCart(productoAValidar) {
    return carrito.some(
      (producto) => producto.item.id === productoAValidar.item.id
    );
  }

  return (
    <CartContext.Provider
      value={{
        carrito,
        cantidad,
        total,
        addItem,
        removeItem,
        clear,
        setCartValues,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
