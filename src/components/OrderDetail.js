import React from "react";
import OrderDetailItem from "./OrderDetailItem";

function OrderDetail() {
  return (
    <div className="table table-hover">
      <h2>Tus productos en la compra</h2>
      <OrderDetailItem />
    </div>
  );
}
export default OrderDetail;
