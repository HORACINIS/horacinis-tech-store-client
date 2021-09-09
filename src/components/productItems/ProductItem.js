import React from 'react';
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

const ProductItem = ({ product, addToCartFunc }) => {
  const classes = useStyles();

  const { image, name, numReviews, price, category, rating } = product;
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
          <Button color='secondary' variant='text'
            onClick={() => addToCartFunc(product)}
          >Add to Cart
          </Button>
          {/* <Button component={Link} color='primary' to={`/products/${category}/${_id}`}
          >Show
          </Button> */}

          {/* TESTING */}
          {product.addedToCart && <Button>IN CART!</Button>}
        </Paper>
      </Grid>
    </Paper>
  )
}

export default ProductItem;