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
    <td>    <Counter product={product} qty={order.qty} order={order} orders={orders} setOrders ={setOrders}/></td>
     <td>{order.costo}</td>
    <td>
     
    </td>
  </tr>
);
export default ProductoDelivered;