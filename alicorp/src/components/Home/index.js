import React from 'react';
import Header from "../Header";
import firebase from "../../controller/firebase";

const Home = () => {
    const [allProducts] = firebase.getProducts();
    console.log(allProducts.docs);
    return(
        <main>
            <Header/>
            {allProducts && div}
            <section></section>
        </main>
    )
}

export default Home;