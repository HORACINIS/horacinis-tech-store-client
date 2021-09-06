import React from 'react';
import { Link } from 'react-router-dom';
import underConstruction from './../../assets/under-construction.png';


const PageNotFound = () => {
  return (
    <div>
      <h1>Page Not Found!</h1>
      <p><Link to='/'>Take me to the Home page</Link></p>
      <img width='100%' src={underConstruction} alt='building' />
      <img width='100%' src={underConstruction} alt='building' />
      <img width='100%' src={underConstruction} alt='building' />
    </div>
  )
}

export default PageNotFound;
