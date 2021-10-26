import React, { useEffect } from 'react';
// import { Link } from 'react-router-dom';
import underConstruction from './../../assets/under-construction.png';

const HeroCover = ({ setTabSelectedValue }) => {
  useEffect(() => {
    setTabSelectedValue(false);
  }, [setTabSelectedValue]);
  return (
    <div>
      <h1>HOME PAGE</h1>
      {/* <p><Link to='/products/phones'>Phones</Link></p> */}
      {/* <p><Link to='/products/laptops'>Laptops</Link></p> */}
      <img width='100%' src={underConstruction} alt='building' />
      <img width='100%' src={underConstruction} alt='building' />
      <img width='100%' src={underConstruction} alt='building' />
    </div>
  )
}

export default HeroCover;
