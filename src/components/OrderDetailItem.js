import React from "react";

function OrderDetailItem({ item }) {
  return (
    <tr>
      <td className="col-sm-8 col-md-6">
        <div className="media">
          <div className="thumbnail pull-left">
            <img
              className="media-object"
              src={item.item.pictureUrl}
              alt="Imagen Producto"
              style={{ maxWidth: "70px", marginRight: "10px" }}
            />
          </div>
          <div className="media-body">
            <h4 className="media-heading">{item.item.title}</h4>
          </div>
        </div>
      </td>
      <td className="col-sm-1 col-md-1" style={{ textAlign: "center" }}>
        <strong>{item.cantidad}</strong>
      </td>
      <td className="col-sm-1 col-md-1 text-center">
        <strong>${item.item.price}</strong>
      </td>
      <td className="col-sm-1 col-md-1 text-center">
        <strong>${item.item.price * item.cantidad}</strong>
      </td>
    </tr>
  );
}
export default OrderDetailItem;
