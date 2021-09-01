import React from 'react';

const Phone = ({ phone }) => {
  const { brand, category, description, image, name, numReviews, price, rating } = phone;
  return (
    <React.Fragment>
      <img width='130px' src={image} alt='phone' />
      <p>Name: {name}</p>
      <p>Brand: {brand}</p>
      <p>Category: {category}</p>
      <p>Description: {description}</p>
      <p>Rating: {rating}</p>
      <p>Num Reviews: {numReviews}</p>
      <p>Price: ${price}</p>
    </React.Fragment>
  )
}

export default Phone;