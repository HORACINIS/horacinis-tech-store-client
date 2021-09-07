import React from 'react';
import { useParams } from 'react-router-dom';
import ReviewsComponent from './../ReviewsComponent';

const SingleItemDisplay = ({ singleItemProduct }) => {
  const { id } = useParams();
  console.log(singleItemProduct)
  return (
    <ul>
      <li>
        <div><ReviewsComponent rating={singleItemProduct.rating} />{singleItemProduct.rating} ({singleItemProduct.numReviews})</div>
        <h2>{singleItemProduct.name}</h2>
        {/* <p>SKU: {singleItemProduct._id}</p> */}
        <p>SKU: {id}</p>
        <p><img src={singleItemProduct.image} alt='product' /></p>
        <p>Description: {singleItemProduct.description}</p>
        <h3>${singleItemProduct.price}.00</h3>
      </li>
    </ul>
  )
}

export default SingleItemDisplay;