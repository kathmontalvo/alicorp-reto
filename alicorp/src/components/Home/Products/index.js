import React from "react";
import Card from './Card'

const Products = ({ allProducts, category }) => {
  return (
    <div className="card-deck">
      {allProducts && allProducts.docs.filter((ele) => ele.data().category === category).map(ele =>
        (
          <Card el={ele} />
        )
      )}

    </div>
  )
};
export default Products;
