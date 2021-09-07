import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReviewsComponent from './../ReviewsComponent';
import Button from '@material-ui/core/Button';

const SingleItemDisplay = ({ fetchedProductsList, fetchProductItems, productCategory, addToCartFunc }) => {
  const { id } = useParams();

  useEffect(() => {
    fetchProductItems(productCategory)
  }, []); //eslint-disable-line react-hooks/exhaustive-deps


  return (
    <div>
      {fetchedProductsList.filter(product => product._id === id).map((product, index) => {
        return (
          <div key={product._id}>
            <Link to={`/products/${product.category}`}>go back</Link>
            <ul>
              <li>
                <div><ReviewsComponent rating={product.rating} />{product.rating} ({product.numReviews})</div>
                <h2>{product.name}</h2>
                {/* <p>SKU: {singleItemProduct._id}</p> */}
                <p>SKU: {id}</p>
                <p><img src={product.image} alt='product' /></p>
                <p>Description: {product.description}</p>
                <h3>${product.price}.00</h3>
                <Button color='primary' variant='text'
                  onClick={() => addToCartFunc(product)}
                >Add to Cart
                </Button>
              </li>
            </ul>
          </div>
        )
      })}
    </div>
  )
}

export default SingleItemDisplay;