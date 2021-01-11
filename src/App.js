import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./Style.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  const [cantidadPedida, setCantidadPedida] = useState(0);

  return (
    <div>
      <BrowserRouter>
        <NavBar cantidad={cantidadPedida} />
        <div style={{ padding: "20px" }}>
          <Switch>
            <Route exact path="/">
              <ItemListContainer header="Resultados encontrados..." />
            </Route>
            <Route exact path="/item/:id">
              <ItemDetailContainer
                setCantidad={setCantidadPedida}
                cantidad={cantidadPedida}
              />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
