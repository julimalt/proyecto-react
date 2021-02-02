import React from "react";
import Carrito from "./CartWidget";

function ShopItem({ orden }) {
  console.log("orden: ", orden);
  return (
    <tr key={orden.id}>
      <td className="col-sm-8 col-md-6">
        <div className="media">
          <div className="thumbnail pull-left">
            {/* <img
              className="media-object"
              src={orden.items[0].item.pictureUrl}
              alt="Imagen Producto"
              style={{ maxWidth: "50px", marginRight: "10px" }}
            /> */}
          </div>
          <div className="media-body">
            {/* <h4 className="media-heading">{orden.items[0].item.title}</h4> */}
          </div>
        </div>
      </td>
      <td className="col-sm-1 col-md-1" style={{ textAlign: "center" }}>
        <h4>{orden.items.length}</h4>
      </td>
      <td className="col-sm-1 col-md-1 text-center">
        <strong>{orden.id}</strong>
      </td>
      <td className="col-sm-1 col-md-1 text-center">
        <strong>${orden.total}</strong>
      </td>
    </tr>
  );
}

export default ShopItem;
