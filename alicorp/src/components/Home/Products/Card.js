
import React from "react";

const Card = ({ el }) => {
  const float = parseFloat(el.data().precio / el.data().unid);
  const result = Math.round(float * 100) / 100;

  return (
    <div className="card col-5 col-md-4 fs-13 p-0">
      <img className="card-img-top" src={el.data().img} alt="Card image cap" />
      <div className="card-body p-2">
        <p className="card-title">{el.data().name}</p>
        <h5 className="card-text align-center"> S/. {el.data().precio} </h5>
        <div>
          <div className="justify-content-between d-flex">
            <p className="my-0 fs-10">Precio x unid.</p>
            <p className="my-0 fs-10">{result}</p>
          </div>
          <div className="justify-content-between d-flex">
            <p className="my-0 fs-10">Precio venta sug. x unid.</p>
            <p className="my-0 fs-10">{el.data()["price-suggested"]}</p>
          </div>
        </div>
        <div className="align-center mt-2">
          <button data-testid='takeQty' className='border-none transparent'><i className="fas fa-minus-circle blue-color"></i></button>
          <span data-testid='qty' className='text-gray' >1</span>
          <button data-testid='addQty' className='border-none transparent'><i className="fas fa-plus-circle blue-color"></i></button>
        </div>  
      </div>
    </div>
  )
}

export default Card;