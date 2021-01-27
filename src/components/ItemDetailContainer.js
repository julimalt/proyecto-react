import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { Productos } from "../Data";
import Loader from "../Loader";
// import { firestore } from "../firebaseconfig";

function ItemDetailContainer() {
  // const [fireItem, setFireItem] = useState();
  const [detalles, setDetalles] = useState({});
  const { id } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getItems.then((resultado) => {
      const item = resultado.find((product) => product.id === parseInt(id));
      setDetalles(item);
      setLoading(false);
    });
  }, [id]);

  const getItems = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(Productos);
    }, 2000);
  });
  // useEffect(() => {
  //   const db = firestore;
  //   const collection = db.collection("productos");
  //   const item = collection.doc(id);

  //   item.get().then((i) => {
  //     setFireItem({ id: i.id, ...i.data() });
  //   });
  // }, [id]);

  return <div>{loading ? <Loader /> : <ItemDetail item={detalles} />}</div>;
  // return (
  //   <div>
  //     {fireItem ? (
  //       <ItemDetail
  //         item={fireItem}
  //         id={fireItem.id}
  //         title={fireItem.title}
  //         price={fireItem.price}
  //         pictureUrl={fireItem.pictureUrl}
  //         description={fireItem.description}
  //         autors={fireItem.autors}
  //       />
  //     ) : (
  //       <Loader />
  //     )}
  //   </div>
  // );
}

export default ItemDetailContainer;
