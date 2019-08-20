import React from 'react';
import Item from './Item';

const Section = () => {

  return (
    // <!--Carousel Wrapper-->

    <div className="container-fluid">
      <div id="carouselExample" className="carousel slide" data-ride="carousel" data-interval="9000">
        <div className="carousel-inner row w-100 mx-auto" role="listbox">
          <Item active='active' img="https://firebasestorage.googleapis.com/v0/b/alicorp-900d0.appspot.com/o/iconos%2FACEITES.png?alt=media&token=ebb19d90-7285-4b3c-852a-8d929f899d84" />
          <Item active='' img="https://firebasestorage.googleapis.com/v0/b/alicorp-900d0.appspot.com/o/iconos%2FCONSERVAS.png?alt=media&token=99d82a51-221f-41e4-9d63-6408810ee616" />
          <Item active='' img="https://firebasestorage.googleapis.com/v0/b/alicorp-900d0.appspot.com/o/iconos%2FPASTAS.png?alt=media&token=65ce17d7-8419-40ff-9e80-338f9d7de4f0" />
          <Item active='' img="https://firebasestorage.googleapis.com/v0/b/alicorp-900d0.appspot.com/o/iconos%2FDETER.png?alt=media&token=843464c2-6846-438d-836a-8535b0e8a9aa" />
          <Item active='' img="https://firebasestorage.googleapis.com/v0/b/alicorp-900d0.appspot.com/o/iconos%2FJABONES.png?alt=media&token=0a6ec257-15fe-4477-b90a-d4d59dd3f8a1" />
          <Item active='' img="https://firebasestorage.googleapis.com/v0/b/alicorp-900d0.appspot.com/o/iconos%2FCOMBOS.png?alt=media&token=53a8930f-356b-45e0-9fb9-eae1403cf1a0" />

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