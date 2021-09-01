import React, { useState, useEffect } from 'react';
import ProductItem from './ProductItem';

const ProductItemsList = ({ product }) => {
  let URL;

  switch (process.env.REACT_APP_NODE_ENV) {
    case 'development':
      URL = `/api/v1/products/${product}`;
      break;
    case 'production':
      URL = `https://horacinis-tech-store.herokuapp.com/api/v1/products/${product}`;
      break;
    default:
      URL = '';
      break;
  }


  const [productItems, setProductItems] = useState([]);

  const fetchPhones = async () => {
    try {
      const response = await fetch(URL);
      const data = await response.json();
      setProductItems(data.data[`${product}`]);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchPhones();
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div>
      <h1>{product}</h1>
      <ul>
        {productItems && productItems.map(product => (
          <li key={product._id}><ProductItem product={product} /></li>
        ))}
      </ul>
    </div>
  )
}

export default ProductItemsList;