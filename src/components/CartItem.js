import React, { useContext } from "react";
import { CartContext } from "../CartContext";

function CartItem({ producto }) {
  const { removeItem } = useContext(CartContext);
  return (
    <tr key={producto.item.id}>
      <td className="col-sm-8 col-md-6">
        <div className="media">
          <div className="thumbnail pull-left">
            <img
              className="media-object"
              src={producto.item.pictureUrl}
              alt="Imagen Producto"
              style={{ maxWidth: "80px", marginRight: "10px" }}
            />
          </div>
          <div className="media-body">
            <h4 className="media-heading">{producto.item.title}</h4>
            <h6 className="media-heading">by {producto.item.autors}</h6>
          </div>
        </div>
      </td>
      <td className="col-sm-1 col-md-1" style={{ textAlign: "center" }}>
        <h4>{producto.cantidad}</h4>
      </td>
      <td className="col-sm-1 col-md-1 text-center">
        <strong>${producto.item.price}</strong>
      </td>
      <td className="col-sm-1 col-md-1 text-center">
        <strong>${producto.item.price * producto.cantidad}</strong>
      </td>
      <td className="col-sm-1 col-md-1">
        <button
          onClick={() => removeItem(producto)}
          type="button"
          className="btn btn-danger"
        >
          <span className="glyphicon glyphicon-remove" />
          Eliminar
        </button>
      </td>
    </tr>
  );
}

export default CartItem;
