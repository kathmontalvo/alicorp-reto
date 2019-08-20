import React from 'react';
import Header from "../Header";
import firebase from "../../controller/firebase";
import Categories from '../Home/Categories';
import Products from '../Home/Products';
const Home = () => {
    const [allProducts] = firebase.getProducts();
    const [pedidos, setPedidos] = useState([]);
    console.log(allProducts);
    return(
        <main>
            <Header/>
           <Categories/>
            <Products allProducts={allProducts} setPedidos={setPedidos} pedidos={pedidos}/>
        </main>
    )
}

export default Home;