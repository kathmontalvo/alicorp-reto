
import React, { useState } from "react";
import Counter from './Counter';
import Total from './Total';

const Card = ({ el, setOrders,orders}) => {

  const [counter, setCounter] = useState(false)
  const [btn, setBtn] = useState(true)

  const float = parseFloat(el.data().precio / el.data().unid);
  const result = Math.round(float * 100) / 100;

  return (
    <div className="card col-5 col-md-4 fs-13 p-0" key={el.data().id}>
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
          {btn === true && (
            <button
              type="button"
              className="btn btn-outline-success"
              onClick={() => {
                setCounter(true)
                setBtn(false)
              }}>Agregar</button>
          )}

          {counter === true && (
            <div
              className="btn btn-success"
            >
              <Counter productId={el.data().id} setOrders={setOrders} orders={orders} />
            </div>
          )}

        </div>
      </div>
    </div>
  )
}

export default Card;