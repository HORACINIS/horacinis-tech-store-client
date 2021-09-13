import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ReviewsComponent from './ReviewsComponent';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import AddToShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import AddedToShoppingCartIcon from '@material-ui/icons/ShoppingCart';

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
      <Typography variant='subtitle2' align='left' style={{ minHeight: '63px' }}>{name}</Typography>
      <Grid container>
        <ReviewsComponent rating={rating} />{rating} ({numReviews})
      </Grid>

      <div align='center'>
        <Link to={`/products/${category}/${name}`}>
          <img className={classes.image} src={image} alt={name} />
        </Link>
      </div>

      <Paper>
        <Grid container justifyContent="space-between">
          <Grid item>
            <Typography variant='h5'>${price}</Typography>
          </Grid>
          <Grid>
            {!addedToCart ?
              (<Button color='secondary' variant='text'
                onClick={() => addToCartFunc(product)}><AddToShoppingCartIcon fontSize='medium' />
              </Button>)
              :
              (<Button color='secondary' variant='text'
                onClick={() => addToCartFunc(product)}><AddedToShoppingCartIcon fontSize='medium' />
              </Button>)
            }
          </Grid>
        </Grid>
      </Paper>
    </Paper>
  )
}

export default ProductItem;