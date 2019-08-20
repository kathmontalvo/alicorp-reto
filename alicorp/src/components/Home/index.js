import React from 'react';
import Header from "../Header";
import firebase from "../../controller/firebase";
import Categories from '../Home/Categories';
import Products from '../Home/Products';
const Home = () => {
    const [allProducts] = firebase.getProducts();
    console.log(allProducts);
    return(
        <main>
            <Header/>
           <Categories/>
            <Products allProducts={allProducts}/>
        </main>
    )
}

export default Home;