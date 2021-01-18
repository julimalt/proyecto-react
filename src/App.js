import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./Style.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Footer from "./components/Footer";
import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  const [carrito, setCarrito] = useState([]);

  return (
    <div>
      <BrowserRouter>
        <NavBar cantidad={carrito.length} />
        <div style={{ padding: "20px" }}>
          <Switch>
            <Route exact path="/">
              <img
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
              <ItemDetailContainer setCarrito={setCarrito} carrito={carrito} />
            </Route>
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
