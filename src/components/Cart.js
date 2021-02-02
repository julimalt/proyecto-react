import React, { useContext } from "react";
import { CartContext } from "../CartContext";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";

function Cart() {
  const { carrito, clear, getCartQuantity, getTotalPrice } = useContext(
    CartContext
  );

  return (
    <div style={{ height: "25em" }}>
      {getCartQuantity() > 0 ? (
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-10 col-md-offset-1">
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th>Producto</th>
                    <th>Cantidad</th>
                    <th className="text-center">Precio</th>
                    <th className="text-center">Total</th>
                    <th>&nbsp;</th>
                  </tr>
                </thead>
                <tbody>
                  {carrito.map((producto) => (
                    <CartItem producto={producto} />
                  ))}
                  <tr>
                    <td> &nbsp; </td>
                    <td> &nbsp; </td>
                    <td> &nbsp; </td>
                    <td>
                      <h3>Total</h3>
                    </td>
                    <td className="text-right">
                      <h3>
                        <strong>${getTotalPrice()}</strong>
                      </h3>
                    </td>
                  </tr>
                  <tr>
                    <td> &nbsp; </td>
                    <td> &nbsp; </td>
                    <td> &nbsp; </td>
                    <td>
                      <button
                        onClick={clear}
                        type="button"
                        className="btn btn-outline-danger"
                      >
                        <span className="glyphicon glyphicon-shopping-cart" />
                        Vaciar
                      </button>
                    </td>
                    <td>
                      <Link to="/Checkout">
                        <button type="button" className="btn btn-success">
                          Checkout <span className="glyphicon glyphicon-play" />
                        </button>
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ) : (
        <div style={{ textAlign: "center", padding: "10em" }}>
          <h2 style={{ color: "#003049" }}>Tu carrito se encuentra vacio</h2>
          <Link to="/">
            <button className="btn btn-primary">Comprar</button>
          </Link>
        </div>
      )}
    </div>
  );
}
export default Cart;
