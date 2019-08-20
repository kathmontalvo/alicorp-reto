
import React from "react";

const Card = ({ el }) => {
  const float = parseFloat(el.data().precio / el.data().unid);
  const result = Math.round(float * 100) / 100;

  return (
    <div className="card col-3">
      <img className="card-img-top" src={el.data().img} alt="Card image cap" />
      <div className="card-body">
        <p className="card-title">{el.data().name}</p>
        <h5 className="card-text"> S/. {el.data().precio} </h5>
        <div>
          <div className="justify-content-around d-flex">
            <p>Precio x unid.</p>
            <p>{result}</p>
          </div>
          <div className="justify-content-around d-flex">
            <p>Precio venta sug. x unid.</p>
            <p>{el.data()["price-suggested"]}</p>
          </div>
        </div>
        <div>
          <button data-testid='takeQty' className='border-none transparent'><i className="fas fa-minus-circle blue-color"></i></button>
          <span data-testid='qty' className='text-gray' >1</span>
          <button data-testid='addQty' className='border-none transparent'><i className="fas fa-plus-circle blue-color"></i></button>
        </div>
      </div>
    </div>
  )
}

export default Card;