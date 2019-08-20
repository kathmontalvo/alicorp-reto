import React, { useState} from 'react';

import Header from "../Header";
import firebase from "../../controller/firebase";
import Categories from './Categories/';
import Products from './Products/';
import Orders from '../Orders';
import Option from './Option'
const Home = () => {
  const [name, setName] = useState("");
  const [type, setType] = useState('Desayuno')
  const [prodData, setProdData] = useState([]);
  const [items, setItems] = useState([]);
  const [show, setShow] = useState(true)
  const [allProducts] = firebase.getProducts();
  const [allOrders] = firebase.getOrders();
 //  console.log(allProducts);
  console.log(allOrders);
  return (
    <main>
      <Header />
      <section>
        {/* slider imgs */}
        <div>
          <Option name="Categorías" aClass="nav-link active" />
          <Categories />
        </div>
      </section>
      <section>
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