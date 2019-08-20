
import React from "react";

import Contador from "../Home/Contador";

const Products = ({allProducts,pedidos,setPedidos}) => (
<>
{allProducts && <div>{allProducts.docs.map((ele)=>(   
    <>
    <div class="card-group">
    <div className="card" style={{maxWidth:"30%" ,height:"20%"}}>
    <img className="card-img" src={ele.data().img} alt="Card image" />
      <div className="card-img-overlay">
        <p className="card-text">{ele.data().name}</p>
        <p className="card-text">Precio:{ele.data().precio}</p>
        <p className="card-text">Precio Sugerido:{ele.data()["price-suggested"]}</p>
        <p className="card-text">Precio Unitario:{((ele.data().precio)/(ele.data().unid)).toFixed()}</p>
      
      </div>
      <Contador pedidos={pedidos} setPedidos={setPedidos}/>
    </div>
    </div>
    
    </>
  ))}

</div>}


</>
);
export default Products;

{/* <div className="card">
  <div className="card-body">
    <p className="card-text">This image is in the middle</p>
  </div>
  <img src="/images/pathToYourImage.png" alt="Card image">
  <div className="card-body">
    <p className="card-text">of a card.</p>
  </div>
</div> */}
