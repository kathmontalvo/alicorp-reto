import React from 'react';
import Header from "../Header";
import firebase from "../../controller/firebase";
import Categories from '../Home/Categories';
const Home = () => {
    const [allProducts] = firebase.getProducts();
    console.log(allProducts);
    return(
        <main>
            <Header/>
            {allProducts && <div>{allProducts.docs.map((ele)=>(
                <div>{ele.data().precio}</div>
            ))}</div>}
            <Categories/>
        </main>
    )
}

export default Home;