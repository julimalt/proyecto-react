import React from "react";
import { Link } from "react-router-dom";
import "../Style.css";

function ShopItem({ orden }) {
  return (
    <tr key={orden.id}>
      <td className="text-center">
        <strong>
          {new Date(orden.date.seconds * 1000).toISOString().substr(0, 10)}
        </strong>
      </td>
      <Link to={`/Shop/${orden.id}`}>
        <td className="text-center">
          <strong>{orden.id}</strong>
        </td>
      </Link>
      <td className="text-center">
        <strong>${orden.total}</strong>
      </td>
    </tr>
  );
}

export default ShopItem;
