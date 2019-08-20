import React from "react";
import Card from './Card'

const Products = ({ allProducts, category }) => {
  return (
    <div className="card-deck container mx-2 d-flex">
      <div className="row d-flex justify-content-around">
        {allProducts &&
          allProducts.docs.filter((ele) => ele.data().category === category).map(ele =>
            (<Card el={ele} />
            )
          )}
      </div>

    </div>
  )
};
export default Products;
