import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ReviewsComponent from './ReviewsComponent';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  control: {
    padding: theme.spacing(1),
  },
  image: {
    width: 150,
  },
}));

const ProductItem = ({ product, addToCartFunc, cart }) => {
  const classes = useStyles();
  const [isProductInCart, setIsProductInCart] = useState(product);

  useEffect(() => {
    cart.filter(item => {
      if (item._id === product._id) {
        setIsProductInCart({ ...product, addedToCart: true })
      };
      return product;
    });
  }, [cart, product])

  const { image, name, numReviews, price, category, rating, addedToCart } = isProductInCart;
  return (
    <Paper className={classes.control}>

      <Typography variant='subtitle2' align='left'>{name}</Typography>
      <div><ReviewsComponent rating={rating} />{rating} ({numReviews})</div>
      <div align='center'>
        <Link to={`/products/${category}/${name}`}>
          <img className={classes.image} src={image} alt='phone' />
        </Link>
      </div>

      <Grid container>
        <Paper>
          <span>${price}</span>
          {!addedToCart ?
            (<Button color='secondary' variant='text'
              onClick={() => addToCartFunc(product)}>Add to Cart
            </Button>)
            :
            (<Button color='secondary' variant='outlined'
              onClick={() => addToCartFunc(product)}>Added to Cart
            </Button>)
          }
        </Paper>
      </Grid>
    </Paper>
  )
}

export default ProductItem;