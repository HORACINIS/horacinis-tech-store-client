import React, { useState, useEffect } from 'react';
import Phone from './Phone';

let URL;

switch (process.env.REACT_APP_NODE_ENV) {
  case 'development':
    URL = '/api/v1/products/phones';
    break;
  case 'production':
    URL = 'https://horacinis-tech-store.herokuapp.com/api/v1/products/phones';
    break;
  default:
    URL = '';
    break;
}

const PhonesList = () => {
  const [phones, setPhones] = useState([]);

  const fetchPhones = async () => {
    try {
      const response = await fetch(URL);
      const data = await response.json();
      setPhones(data.data.phones);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchPhones();
  }, []);

  return (
    <div>
      <h1>Phones List Component</h1>
      <ul>
        {phones && phones.map(phone => (
          <li key={phone._id}><Phone phone={phone} /></li>
        ))}
      </ul>
    </div>
  )
}

export default PhonesList;