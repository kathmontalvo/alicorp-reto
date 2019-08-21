import React from "react";

import ProductDelivered from "./ProductDelivered";
import Total from "./Total";
import Resume from "./Resume";

const Order = ({ allOrders,orders,setOrders }) => {
  return (
    <form   >     
        <div>         
            <div>
              <div className="text-black" style={{ maxWidth: "100%" }}>
                <div className="card-body">
                  <div>
                    <table className="table table-sm">
                      <thead>
                        <tr>
                          <th scope="col">Producto</th>
                          <th scope="col">Precio</th>
                          <th scope="col">Precio  de Venta Sugerido</th>
                          <th scope="col">Cantidad</th>
                          <th scope="col">Ganancia</th>
                          <th scope="col"> Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        {orders.map((order)=>(
 order.qty>0 ? <ProductDelivered  order ={order}orders={orders} setOrders={setOrders} /> 
 :""))
 }                                       
                      </tbody>
                    </table>
                    <Resume />
                  </div>
                </div>
              </div>
            </div>
     
        </div>
  
    </form>
  )
}
export default Order;

