import React, { useState, useEffect } from 'react';
import Laptop from './Laptop';

let URL;

switch (process.env.REACT_APP_NODE_ENV) {
  case 'development':
    URL = '/api/v1/products/laptops';
    break;
  case 'production':
    URL = 'https://horacinis-tech-store.herokuapp.com/api/v1/products/laptops';
    break;
  default:
    URL = '';
    break;
}

const LaptopsList = () => {
  const [laptops, setLaptops] = useState([]);

  const fetchLaptops = async () => {
    try {
      const response = await fetch(URL);
      const data = await response.json();
      setLaptops(data.data.laptops);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchLaptops();
  }, []);

  return (
    <div>
      <h1>Laptops List Component</h1>
      <ul>
        {laptops && laptops.map(laptop => (
          <li key={laptop._id}><Laptop laptop={laptop} /></li>
        ))}
      </ul>
    </div>
  )
}

export default LaptopsList;
