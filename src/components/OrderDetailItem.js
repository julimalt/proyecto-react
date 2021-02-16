import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { firestore } from "../firebaseconfig";
import Loader from "../Loader";

function OrderDetailItem() {
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
    <div>
      {data !== {} ? (
        <div>
          {data.items.map((item) => (
            <div>
              <tr>
                <td className="col-sm-8 col-md-6">
                  <div className="media">
                    <div className="thumbnail pull-left">
                      <img
                        className="media-object"
                        src={item.item.pictureUrl}
                        alt="Imagen Producto"
                        style={{ maxWidth: "80px", marginRight: "10px" }}
                      />
                    </div>
                    <div className="media-body">
                      <h4 className="media-heading">{item.item.title}</h4>
                    </div>
                  </div>
                </td>
                <td
                  className="col-sm-1 col-md-1"
                  style={{ textAlign: "center" }}
                >
                  <strong>Cant:{item.cantidad}</strong>
                </td>
                <td className="col-sm-1 col-md-1 text-center">
                  <strong>Precio: ${item.item.price}</strong>
                </td>
                <td className="col-sm-1 col-md-1 text-center">
                  <strong> Total: ${item.item.price * item.cantidad}</strong>
                </td>
              </tr>
            </div>
          ))}
        </div>
      ) : (
        <h2>No hemos encontrado la orden que busca</h2>
      )}
    </div>
  );
}
export default OrderDetailItem;
