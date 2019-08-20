import React from 'react';

const Option = ({ name, aClass }) => {
  return (
    <ul className="nav nav-tabs w-100 my-3" role="tablist">
      <li className="nav-item">
        <a className={aClass} data-toggle="tab" href="#" role="tab" >{name}</a>
      </li>
    </ul>
  )
};

export default Option;