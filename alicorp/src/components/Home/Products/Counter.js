import React from "react";

const Counter = ({ productId, add }) => {

  return (
    <div class="btn-group w-100" role="group" aria-label="Basic example">
      <button type="button" class="btn col-4 btn-success">
        <i className="fas fa-minus blue-color"></i>
      </button>
      <button type="button" class="btn col-4 btn-success">
        <span data-testid='qty' className='text-gray' >1</span>
      </button>
      <button type="button" class="btn col-4 btn-success">
        <i className="fas fa-plus blue-color"></i>
      </button>
    </div>
  )
}

export default Counter;