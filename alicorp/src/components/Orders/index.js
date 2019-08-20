import React from "react";

import ProductDelivered from "./ProductDelivered";
import Total from "./Total";

const Order = ({pedidos}) => {
  return (
    <form 
    >
      <div className="text-black" style={{ maxWidth: "100%" }}>
      <div className="card-body">
          <div>
            <table className="table table-sm">
              <thead>
                <tr>
                  <th scope="col">Cantidad</th>
                  <th scope="col">Producto</th>
                  <th scope="col">Precio</th>
                  <th scope="col"> Eliminar</th>
                </tr>
              </thead>
              <tbody>
               
              </tbody>
            </table>
           
              <button
                className="btn btn-success"
                onClick={() => {
                 
                }}
              >
                Enviar a cocina
              </button>
            
          </div>
        </div>
      </div>
    </form>
  );
};
export default Order;