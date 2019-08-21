import React from "react";

const Counter = ({
 qty
}) => (
  <div className="col-6 table">
    <button
      className="table-cell btn-img-plus btn-none"
      type="button"
      onClick={() => {
        // agregarPedido(producto, pedidos);
       
        // agregarPedido(producto,pedidos,setPedidos);
      }}
    >
      <img src="https://i.postimg.cc/t4NLbJd9/mas.png"  />
    </button>
    <p className="table-cell">{qty}</p>
    <button
      className="table-cell btn-img-plus btn-none"
      type="button"
     
    >
      <img src="https://i.postimg.cc/XvNtYWxd/menos.png"  />
    </button>
    </div>
);
export default Counter;