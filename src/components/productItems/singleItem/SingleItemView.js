import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReviewsComponent from './../ReviewsComponent';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const SingleItemDisplay = ({ fetchedProductsList, fetchProductItems, productCategory, addToCartFunc }) => {
  const { name } = useParams();

  useEffect(() => {
    fetchProductItems(productCategory)
  }, []); //eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div>
      {fetchedProductsList.filter(product => product.name === name).map((product) => {
        const { _id, name, category, rating, numReviews, image, description, price } = product;
        return (
          <List key={_id}>
            <Link to={`/products/${category}`}>Back to {category}</Link>
            <ListItem>
              <div>
                <div><ReviewsComponent rating={rating} />{rating} ({numReviews})</div>
                <h2>{name}</h2>
                <p>SKU: {_id}</p>
                <p><img src={image} alt='product' /></p>
                <p>Description: {description}</p>
                <h3>${price}.00</h3>
                <Button color='secondary' variant='outlined'
                  onClick={() => addToCartFunc(product)}
                >Add to Cart
                </Button>
              </div>
            </ListItem>
          </List>
        )
      })}
    </div>
  )
}

export default SingleItemDisplay;