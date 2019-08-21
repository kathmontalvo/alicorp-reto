import React from 'react';

const Ruta = ({ category }) => {
  return (
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="#home">Home</a></li>
        <li class="breadcrumb-item"><a href="#catalogue">Catálogo</a></li>
        <li class="breadcrumb-item active" aria-current="page">{category}</li>
      </ol>
    </nav>
  )
}

export default Ruta;