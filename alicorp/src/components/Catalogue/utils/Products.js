
import React, { useState } from "react";
import Card from '../../Home/Products/Card'
import firebase from "../../controller/firebase";

const Products = ({ category }) => {
  const [allProducts] = firebase.getProducts();

  return (
    <div className="mx-2 d-flex">
      <div className="flex-wrap d-flex justify-content-around">
        {allProducts &&
          allProducts.docs.filter((ele) => ele.data().category === category).map(ele =>
            (<Card el={ele} setOrders={setOrders} orders={orders} />
            )
          )}
      </div>

    </div>
  )
};
export default Products;
