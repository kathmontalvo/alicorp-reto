import React from "react";
import Counter from "./Counter";

const ProductoDelivered = ({pedido
 
}) => (
  <tr>
    <td>
{pedido.name}
    </td>
    <td>{pedido.precio}</td>
    <td>producto.price-suggested</td>
    <td>    <Counter qty={pedido.qty}/></td>
    <td>producto.gananancia</td>
     <td>{pedido.costo}</td>
    <td>
      <button
      className="btn-none"
        onClick={() => {
         
        }}
      >
        <img src="https://i.postimg.cc/pdd1tZXB/delete.png" className="btn-img-delete"/>
      </button>
    </td>
  </tr>
);
export default ProductoDelivered;