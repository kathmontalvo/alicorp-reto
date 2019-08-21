import React from "react";
import Counter from "./Counter";
import{ addOrder,deleteProductOrder} from '../../controller/Orders';
const ProductoDelivered = ({product,order,orders ,setOrders
 
}) => (
  <tr>
    <td>
{order.name}
    </td>
    <td>{order.precio}</td>
    <td> s/.15.4</td>
    <td>    <Counter product={product} qty={order.qty} order={order} orders={orders} setOrders ={setOrders}/></td>
    <td>s/.20</td>
     <td>{order.costo}</td>
    <td>
      <button
      className="btn-none"
      type="button"
        onClick={() => {
          setOrders(deleteProductOrder(order.id,orders));
         
        }}
      >
        <img src="https://i.postimg.cc/pdd1tZXB/delete.png" className="btn-img-delete"/>
      </button>
    </td>
  </tr>
);
export default ProductoDelivered;