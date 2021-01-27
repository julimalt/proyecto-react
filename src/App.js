import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./Style.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Footer from "./components/Footer";
import CartProvider from "./CartContext";
import Cart from "./components/Cart";
import { firestore } from "./firebaseconfig";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  const [itemList, setItemList] = useState([]);
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    const db = firestore;
    const collection = db.collection("items");
    const query = collection.get();
    query
      .then((result) => {
        setItemList(result.docs.map((p) => ({ id: p.id, ...p.data() })));
        console.log(itemList);
      })
      .catch((error) => {
        console.log(error);
      });
    console.log(itemList);
    // setLoading(false);
  }, [itemList]);

  return (
    <CartProvider>
      <div>
        <BrowserRouter>
          <NavBar />
          <div>
            <Switch>
              <Route exact path="/cart">
                <Cart />
              </Route>
              <Route exact path="/">
                <img
                  style={{ marginTop: "20px" }}
                  className="img"
                  src="https://i.imgur.com/uR4KNPG.png"
                  alt="banner Dr.Comics"
                />
                <ItemListContainer data={itemList} />
              </Route>
              <Route exact path="/category/:category">
                <ItemListContainer data={itemList} />
              </Route>
              <Route exact path="/item/:id">
                <ItemDetailContainer data={itemList} />
              </Route>
            </Switch>
          </div>
          <Footer />
        </BrowserRouter>
      </div>
    </CartProvider>
  );
}

export default App;
