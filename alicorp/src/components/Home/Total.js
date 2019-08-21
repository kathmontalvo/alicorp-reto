import React from "react";
import gettingTotalCost from '../../controller/firebase';
const Total = ({ pedidos}) => (
   <div>TOTAL = ${gettingTotalCost(pedidos)}</div>
);

export default Total;