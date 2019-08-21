import React, { useState } from 'react';
import Header from '../Header'
import Ruta from './utils/Breadcrumb.js'
import Products from './utils/Products.js'
import firebase from "../../controller/firebase";

const Detergentes = () => {
  const [allProducts] = firebase.getProducts();
  const [allOrders] = firebase.getOrders();
  const [orders, setOrders] = useState([]);
  return (
    <>
      <Header />
      <main className="main-relative">
        <Ruta category="Detergentes" />
        <Products allProducts={allProducts} category="Detergentes" orders={orders} setOrders={setOrders} />
      </main>
    </>
  )
};

export default Detergentes;