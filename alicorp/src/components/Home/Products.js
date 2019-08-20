
import React from "react";



const Products = ({allProducts}) => (
<>
{allProducts && <div>{allProducts.docs.map((ele)=>(   
    <div className="card-group"> 
    <div className="card" style={{maxWidth:"30%" ,height:"20%"}}>
  <div className="card-body">
    <p className="card-text">This image is in the middle</p>
  </div>
  <img src={ele.data().img} alt="Card image"/>
  <div className="card-body">
    <p className="card-text">of a card.</p>
  </div>
  </div>
</div>
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