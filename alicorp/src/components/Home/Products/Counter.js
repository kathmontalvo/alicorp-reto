import React from "react";

const Counter = ({productId,setOrders,orders}) => {
 
  return (
    <div >
     <div>
          <button data-testid='takeQty' className='border-none transparent'  onClick={() => { add(productId) }}><i className="fas fa-minus-circle blue-color"></i></button>
          <span data-testid='qty' className='text-gray' >1</span>
          <button data-testid='addQty' className='border-none transparent'><i className="fas fa-plus-circle blue-color"></i></button>
      </div>
    </div>
  )
}

export default Counter;