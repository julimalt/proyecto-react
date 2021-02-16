import React, { useEffect, useState } from "react";
import { firestore } from "../firebaseconfig";
import ShopItem from "./ShopItem";
import { Link, useLocation } from "react-router-dom";
import Loader from "../Loader";

function Shop() {
  const [ordenes, setOrdenes] = useState([]);
  const [loading, setLoading] = useState(true);
  const email = useQuery();
  useEffect(() => {
    setLoading(true);
    const db = firestore;
    const orderCollection = db.collection("orders");
    const datos = orderCollection.where("buyer.email", "==", email);
    datos.get().then((result) => {
      if (result.docs[0].data() === undefined) {
        setLoading(false);
      } else {
        const collectionOrders = result.docs.map((o) => ({
          id: o.id,
          ...o.data(),
        }));
        setOrdenes(collectionOrders);
        setLoading(false);
      }
    });
  }, [email]);
  function useQuery() {
    const query = new URLSearchParams(useLocation().search);
    return query.get("email");
  }

  if (loading) {
    return <Loader />;
  }

  return (
    <div style={{ height: "25em" }}>
      {ordenes.length > 0 ? (
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-10 col-md-offset-1">
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th className="text-center">Fecha de compra</th>
                    <th className="text-center">Id Compra</th>
                    <th className="text-center">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {ordenes.map((orden) => (
                    <ShopItem orden={orden} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ) : (
        <div style={{ textAlign: "center", padding: "10em" }}>
          <h2 style={{ color: "#003049" }}>Aún no realizaste ninguna compra</h2>
          <Link to="/">
            <button className="btn btn-primary">Comprar</button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Shop;
