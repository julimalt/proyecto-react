import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import Loader from "../Loader";
import { firestore } from "../firebaseconfig";

function ItemDetailContainer() {
  const [detalles, setDetalles] = useState({});
  const { id } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const db = firestore;
    const itemCollection = db.collection("items");
    const product = itemCollection.where("id", "==", parseInt(id));

    product.get().then((result) => {
      if (result.docs[0].data() === undefined) {
        setLoading(false);
      } else {
        setDetalles({ id: result.docs[0].id, ...result.docs[0].data() });
        setLoading(false);
      }
    });
  }, [id]);

  return <div>{loading ? <Loader /> : <ItemDetail item={detalles} />}</div>;
}

export default ItemDetailContainer;
