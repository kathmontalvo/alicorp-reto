import React from 'react';
import Header from "../Header";
import firebase from "../../controller/firebase";

const Home = () => {
    const [allProducts] = firebase.getProducts();
    console.log(allProducts);
    return(
        <main>
            <Header/>
            {allProducts && <div>{allProducts.docs.map((ele)=>(
                <div>{ele.data().precio}</div>
            ))}</div>}
            <section></section>
        </main>
    )
}

export default Home;