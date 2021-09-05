import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ReviewsComponent from './ReviewsComponent';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  control: {
    padding: theme.spacing(1),
  },
  image: {
    width: 150,
  },
}));

const ProductItem = ({ product }) => {
  const classes = useStyles();

  const { image, name, numReviews, price, rating } = product;
  return (

    <Paper className={classes.control} >
      <Typography variant='subtitle2' align='left'>{name}</Typography>
      <div><ReviewsComponent rating={rating} />{rating} ({numReviews})</div>
      <div align='center'>
        <img className={classes.image} src={image} alt='phone' />
      </div>
      <p>${price}</p>
    </Paper>
  )
}

export default ProductItem;