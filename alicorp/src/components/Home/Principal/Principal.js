import React from 'react';

const Principal = () => {

  return (
    // <!--Carousel Wrapper-->
    <div className="contmin">
      <div id="myCarousel" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src="https://i.postimg.cc/Cx75CrdW/Desktop.png" alt="Post Picture"></img>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="https://i.postimg.cc/Gtjn0V0R/Desktop88.png" alt="Post Picture"></img>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="https://i.postimg.cc/Wb4Hbhgg/Desktop-1.png" alt="Post Picture"></img>
          </div>
        </div>
        <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  )
}

export default Principal;