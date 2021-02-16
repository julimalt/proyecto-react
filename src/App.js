import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Style.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Footer from "./components/Footer";
import CartProvider from "./CartContext";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Orders from "./components/Orders";
import Shop from "./components/Shop";
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import OrderDetail from "./components/OrderDetail";

function App() {
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
              <Route exact path="/checkout">
                <Checkout />
              </Route>
              <Route exact path="/orders">
                <Orders />
              </Route>
              <Route exact path="/shop">
                <Shop />
              </Route>
              <Route exact path="/">
                <img
                  style={{ marginTop: "20px" }}
                  className="img"
                  src="https://i.imgur.com/uR4KNPG.png"
                  alt="banner Dr.Comics"
                />
                <ItemListContainer />
              </Route>
              <Route exact path="/category/:category">
                <ItemListContainer />
              </Route>
              <Route exact path="/item/:id">
                <ItemDetailContainer />
              </Route>
              <Route exact path="/Shop/:order">
                <OrderDetail />
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
