import React, { useState } from 'react';

import Header from "../Header";
import firebase from "../../controller/firebase";
import Categories from './Categories/';
import Products from './Products/';
import Option from './Option'
import Principal from './Principal/Principal';
const Home = () => {

  const [allProducts] = firebase.getProducts();
  console.log(allProducts);
  return (
    <main>
      <Header />
      <Principal />
      <section>
        {/* slider imgs */}
        <div>
        </div>
        <div>
          <Option name="Categorías" aClass="nav-link active" />
          <Categories />
        </div>
      </section>
      <section>
        <div>
          <Option name="Jabones" aClass="nav-link active" />
          <Products allProducts={allProducts} category="Jabones" />
        </div>
        <div>
          <Option name="Pastas" aClass="nav-link active" />
          <Products allProducts={allProducts} category="Pastas" />
        </div>
        <div>
          <Option name="Conservas" aClass="nav-link active" />
          <Products allProducts={allProducts} category="Conservas" />
        </div>
        <div>
          <Option name="Aceites" aClass="nav-link active" />
          <Products allProducts={allProducts} category="Aceites" />
        </div>
        <div>
          <Option name="Detergentes" aClass="nav-link active" />
          <Products allProducts={allProducts} category="Detergentes" />
        </div>
      </section>
    </main>
  )
}

export default Home;