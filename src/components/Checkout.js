import React, { useContext, useState } from "react";
import { CartContext } from "../CartContext";
import { Link } from "react-router-dom";
import { firestore } from "../firebaseconfig";
import firebase from "firebase/app";
import "../Style.css";
import Modal from "../components/Modal";

function Checkout() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [compra, setCompra] = useState(false);
  const { carrito, getTotalPrice, clear } = useContext(CartContext);

  function submitOrder(e) {
    setCompra(false);
    e.preventDefault();
    const db = firestore;
    const orders = db.collection("orders");
    const precioTotal = getTotalPrice();

    const order = {
      buyer: { name: name, phone: phone, email: email },
      items: carrito,
      date: firebase.firestore.Timestamp.fromDate(new Date()),
      total: precioTotal,
    };
    console.log(order);
    orders
      .add(order)
      .then(() => setCompra(true))
      .then(() => {
        clear();
        setName("");
        setEmail("");
        setPhone("");
      })
      .catch((error) => console.log(error));
    return true;
  }

  if (compra) {
    return <Modal />;
  }

  return (
    <div className="container">
      <form>
        <h2>Datos de compra</h2>
        <ul className="flex-outer">
          <li>
            <label htmlFor="first-name">Nombre</label>
            <input
              type="text"
              id="first-name"
              placeholder="Ingresá tu nombre"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </li>
          <li>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Ingresá tu Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </li>
          <li>
            <label htmlFor="phone">Telefono</label>
            <input
              type="tel"
              id="phone"
              placeholder="Ingresá tu telefono"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </li>
          <li>
            <Link to="/Shop">
              <button type="submit" onClick={submitOrder}>
                Comprar
              </button>
            </Link>
          </li>
        </ul>
      </form>
    </div>
  );
}

export default Checkout;
