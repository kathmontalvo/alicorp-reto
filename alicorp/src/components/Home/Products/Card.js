
import React,{useState} from "react";
import Counter from './Counter';
import Total from './Total';

const Card = ({ el,add }) => {
 
  const [counter, setCounter] = useState(false)
  const float = parseFloat(el.data().precio / el.data().unid);
  const result = Math.round(float * 100) / 100;

  return (
    <div className="card col-3" key={el.data().id}>
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
        <button type="button" className="btn btn-outline-success" onClick={()=>{
 setCounter(true)
  
          }
           
          }>Agregar</button>
          {counter === true &&(
            <><Counter  productId={el.id} add={add}/>
            <Total/></>

          )}

        </div>
      </div>
    </div>
  )
}

export default Card;