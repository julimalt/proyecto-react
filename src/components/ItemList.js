import React from "react";
import Item from "./Item";

function ItemList({ productos }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr 1fr",
        gridGap: "10px",
        padding: "30px",
      }}
    >
      {productos.map((producto) => (
        <Item key={producto.id} item={producto} />
      ))}
    </div>
  );
}
export default ItemList;
