import React, { useState, useEffect } from "react";

export const CartContext = React.createContext();

function CartProvider({ children }) {
  const [carrito, setCarrito] = useState([]);
  const [cantidad, setCantidad] = useState(0);
  const [total, setTotal] = useState();

  useEffect(() => {
    var totalCosto = 0;

    const totalesProducto = carrito.map((item) => item.price * item.cantidad);

    totalesProducto.map((precioItem) => (totalCosto = totalCosto + precioItem));

    setTotal(totalCosto);

    const carritoCantidad = carrito.length;

    setCantidad(carritoCantidad);
  }, [carrito]);

  function addItem(productoAAgregar) {
    if (isInCart(productoAAgregar)) {
      const itemEnCarrito = carrito.find(
        (producto) => producto.id === productoAAgregar.id
      );
      const carritoFiltrado = carrito.filter(
        (producto) => producto.id !== productoAAgregar.id
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
        (producto) => producto.id !== productoARemover.id
      );

      setCarrito(carritoActualizado);
    }
  }

  function clear() {
    setCarrito([]);
  }

  function isInCart(productoAValidar) {
    return carrito.some((producto) => producto.id === productoAValidar.id);
  }

  return (
    <CartContext.Provider
      value={{ carrito, cantidad, total, addItem, removeItem, clear }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
