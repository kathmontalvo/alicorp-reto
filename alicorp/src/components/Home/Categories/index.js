import React from 'react';
import Item from './Item';

const Section = () => {

  return (
    // <!--Carousel Wrapper-->

    <div className="container-fluid">
      <div id="carouselExample" className="carousel slide" data-ride="carousel" data-interval="9000">
        <div className="carousel-inner1 row w-100 mx-auto" role="listbox">
          <Item active='active' img="//via.placeholder.com/600x400?text=1" />
          <Item active='' img="//via.placeholder.com/600x400?text=2" />
          <Item active='' img="//via.placeholder.com/600x400?text=3" />
          <Item active='' img="//via.placeholder.com/600x400?text=4" />
          <Item active='' img="//via.placeholder.com/600x400?text=5" />
          <Item active='' img="//via.placeholder.com/600x400?text=6" />

        </div>
        <a className="carousel-control-prev" href="#carouselExample" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next text-faded" href="#carouselExample" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>

  )
}

export default Section;