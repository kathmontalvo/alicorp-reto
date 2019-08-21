import React from 'react';
import Header from '../Header'
import Ruta from './utils/Breadcrumb.js'
import Products from './utils/Products.js'

const Aceites = () => {
  return (
    <>
        <Header />
        <Ruta category="Aceites"/>
        <Products category="Aceites"/>
    </>
    )
};

export default Aceites;