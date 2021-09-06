import React from 'react';
import { useParams } from 'react-router-dom';

const SingleItemDisplay = ({ product }) => {
  const { _id } = useParams();
  return (
    <div>
      {/* {products.filter(product => product.name === name).map((product, index) => (
        <div key={index}>
          <h1>{product.name}</h1>
          <img width='200px' src={product.image} alt='product' />
        </div>
      ))} */}
      <h1>mamascalo</h1>
      <h1>{product}</h1>
      <h1>{product.name}</h1>
      <h1>{product._id}</h1>
    </div>
  )
}

export default SingleItemDisplay;