import React from 'react';

const Option = ({ name, aClass, action}) => {
  return (
    <ul className="nav nav-tabs w-100 my-3 d-flex justify-content-between" role="tablist">
      <li className="nav-item">
        <a className={aClass} href="#" >{name}</a>
      </li>
      <li className="nav-item">
        <a  href="#home" onClick={action} > Ver más</a>
      </li>
    </ul>
  )
};

export default Option;