import React from 'react';
import { useParams } from 'react-router-dom';

const SingleItemDisplay = ({ products }) => {
  const { name } = useParams();
  return (
    <div>
      {/* {products.filter(product => product.name === name).map((product, index) => (
        <div key={index}>
          <h1>{product.name}</h1>
          <img width='200px' src={product.image} alt='product' />
        </div>
      ))} */}
      <h1>{products.name}</h1>
    </div>
  )
}

export default SingleItemDisplay;