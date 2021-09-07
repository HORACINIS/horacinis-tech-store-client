import React from 'react';
import { useParams, Link } from 'react-router-dom';
import ReviewsComponent from './../ReviewsComponent';
import Button from '@material-ui/core/Button';

const SingleItemDisplay = ({ singleItemProduct, addToCartFunc }) => {
  const { id } = useParams();
  const matchedProduct = singleItemProduct && singleItemProduct._id === id;
  console.log('---------------')
  console.log(matchedProduct)
  console.log('----------------')
  console.log(singleItemProduct)
  return (
    <div>
      <Link to={`/products/${singleItemProduct.category}`}>go back</Link>
      <ul>
        <li>
          <div><ReviewsComponent rating={singleItemProduct.rating} />{singleItemProduct.rating} ({singleItemProduct.numReviews})</div>
          <h2>{singleItemProduct.name}</h2>
          {/* <p>SKU: {singleItemProduct._id}</p> */}
          <p>SKU: {id}</p>
          <p><img src={singleItemProduct.image} alt='product' /></p>
          <p>Description: {singleItemProduct.description}</p>
          <h3>${singleItemProduct.price}.00</h3>
          <Button color='primary' variant='text'
            onClick={() => addToCartFunc(singleItemProduct)}
          >Add to Cart
          </Button>
        </li>
      </ul>
    </div>
  )
}

export default SingleItemDisplay;