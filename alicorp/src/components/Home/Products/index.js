
import React,{useState} from "react";
import Card from './Card'
import ctrl from '../../../controller/products';
const Products = ({ allProducts, category }) => {
  const  [orders, setOrders] = useState([]);
  const [prodData, setProdData] = useState([]);
  const mapFunc = (fn) => (id) => {
    setOrders(fn(orders, id))
  };
  const increase = mapFunc(ctrl.increase)
  const decrease = mapFunc(ctrl.decrease)
  const remove = mapFunc(ctrl.delete)
  return (
    <div className="card-deck">
      {allProducts && allProducts.docs.filter((ele) => ele.data().category === category).map(ele =>
        (
          <Card el={ele}  add={increase} />
        )
      )}

    </div>
  )
};
export default Products;
