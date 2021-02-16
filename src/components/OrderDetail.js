import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { firestore } from "../firebaseconfig";
import Loader from "../Loader";
import OrderDetailItem from "./OrderDetailItem";

function OrderDetail() {
  const { order } = useParams();
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const db = firestore;
    const orderCollection = db.collection("orders");
    const datos = orderCollection.doc(order);
    datos.get().then((result) => {
      console.log(result.data());
      setData(result.data());
      setLoading(false);
    });
  }, [order]);

  if (loading) {
    return <Loader />;
  }
  return (
    <div style={{ padding: "30px" }} className="table table-hover">
      <h4 style={{ textAlign: "left", marginTop: "20px" }}>
        Detalles de la orden
      </h4>
      <div
        style={{
          display: "flex",
          padding: "20px",
          flexDirection: "row",
          justifyContent: "space-around",
          border: "1px solid rgba(0,0,0,0.1)",
          borderRadius: "15px",
          boxShadow: "2px 2px 2px rgba(0,0,0,0.3)",
        }}
      >
        <p>
          <strong>N° de Orden: </strong> {order}
        </p>
        <p>
          <strong>Nombre: </strong> {data.buyer.name}
        </p>
        <p>
          <strong>Fecha: </strong>
          {new Date(data.date.seconds * 1000).toISOString().substr(0, 10)}
        </p>
      </div>
      <h4 style={{ textAlign: "left", marginTop: "20px" }}>
        Tus productos en la compra
      </h4>
      <table
        style={{
          padding: "20px",
          border: "1px solid rgba(0,0,0,0.1)",
          borderRadius: "15px",
          boxShadow: "2px 2px 2px rgba(0,0,0,0.3)",
        }}
      >
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
          {data.items.map((item) => (
            <OrderDetailItem item={item} />
          ))}
        </tbody>
        <h5 style={{ display: "flex", justifyContent: "flex-end" }}>
          <strong>Total: </strong>${data.total}
        </h5>
      </table>
    </div>
  );
}
export default OrderDetail;
