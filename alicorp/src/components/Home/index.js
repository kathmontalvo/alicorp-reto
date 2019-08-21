import React, { useState } from 'react';

import Header from "../Header";
import firebase from "../../controller/firebase";
import Categories from './Categories/';
import Products from './Products/';
import Orders from '../Orders';
import Option from '../Option'
import Principal from './Principal/Principal';
const Home = () => {

  const [allProducts] = firebase.getProducts();
  const [allOrders] = firebase.getOrders();

  
  console.log(allProducts);
  console.log(allOrders);
 
  return (
    <main>
      <Header />
      <Principal />
      <section className="container-fluid">
        {/* slider imgs */}
        <div>
        </div>
        <div>
          <Categories />
        </div>
      </section>
      <section className="container-fluid">
        <div>
          <Option name="Jabones" aClass="nav-link active" />
          <Products allProducts={allProducts} category="Jabones"  allOrders={allOrders}/>
        </div>
        <div>
          <Option name="Pastas" aClass="nav-link active" />
          <Products allProducts={allProducts} category="Pastas" allOrders={allOrders}/>
        </div>
        <div>
          <Option name="Conservas" aClass="nav-link active" />
          <Products allProducts={allProducts} category="Conservas" allOrders={allOrders}/>
        </div>
        <div>
          <Option name="Aceites" aClass="nav-link active" />
          <Products allProducts={allProducts} category="Aceites" allOrders={allOrders}/>
        </div>
        <div>
          <Option name="Detergentes" aClass="nav-link active" />
          <Products allProducts={allProducts} category="Detergentes" allOrders={allOrders}/>
        </div>
      </section>
     <Orders pedidos={allOrders}/>
    </main>
  )
}

export default Home;