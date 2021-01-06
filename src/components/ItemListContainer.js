import React from "react";
import ItemList from "./ItemList";

function ItemListContainer({ header }) {
  return (
    <div>
      <h3 style={{ color: "#003049" }}>{header}</h3>
      <ItemList />
    </div>
  );
}

export default ItemListContainer;
