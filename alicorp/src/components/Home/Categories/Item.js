import React from 'react';

const Item = ({active, img}) => {
  return (
    < div className={`carousel-item1 col-md-3 ${active}`} >
      <div className="panel panel-default">
        <div className="panel-thumbnail">
          <a href="#" title="image 4" className="thumb">
            <img className="img-fluid mx-auto d-block" src={img} alt="slide 3" />
          </a>
        </div>
      </div>
    </div>
    
  )
}

export default Item;