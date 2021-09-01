import React from 'react';
import { Link } from 'react-router-dom';

const HeroCover = () => {
  return (
    <div>
      <h1>HOME PAGE</h1>
      <Link to='/products/phones'>Phones</Link>
    </div>
  )
}

export default HeroCover;
