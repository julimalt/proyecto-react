import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Style.css";

function Orders() {
  const [email, setEmail] = useState("");
  return (
    <div className="container">
      <form>
        <h2>Obtener Ordenes</h2>
        <ul className="flex-outer">
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
            <Link to={`/Shop?email=${email}`}>
              <button>Ver</button>
            </Link>
          </li>
        </ul>
      </form>
    </div>
  );
}

export default Orders;
