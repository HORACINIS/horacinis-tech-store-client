import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
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

  const { brand, category, image, name, numReviews, price, rating } = product;
  return (

    <Paper className={classes.control} >
      <>
        <Typography variant='subtitle2' align='left'>Horacinis Morancinis Espinozaninis hehehe probando testeando {name}</Typography>
        <div align='center'>
          <img className={classes.image} src={image} alt='phone' />
        </div>
        <p>Brand: {brand}</p>
        <p>Category: {category}</p>
        <p>Rating: {rating}</p>
        <p>Num Reviews: {numReviews}</p>
        <p>Price: ${price}</p>
      </>
    </Paper>
  )
}

export default ProductItem;