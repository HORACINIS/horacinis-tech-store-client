import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductItem from './ProductItem';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

const ProductItemsList = ({ product }) => {

const classes = useStyles();
  let URL;

  switch (process.env.REACT_APP_NODE_ENV) {
    case 'development':
      URL = `/api/v1/products/${product}`;
      console.log(URL); // NEEDS TO BE DELETED
      break;
    case 'production':
      URL = `https://horacinis-tech-store.herokuapp.com/api/v1/products/${product}`;
      console.log(URL); // NEEDS TO BE DELETED
      break;
    default:
      URL = '';
      break;
  }


  const [productItems, setProductItems] = useState([]);

  const fetchPhones = async () => {
    try {
      const response = await fetch(URL);
      const data = await response.json();
      setProductItems(data.data[`${product}`]);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchPhones();
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div>
      <h1>{product}</h1>
      <p><Link to='/'>Home</Link></p>
      <Grid container className={classes.root} spacing={2}>
        {productItems && productItems.map(product => (
          <Grid item key={product._id} xs={6} sm={4} lg={3}><ProductItem product={product} /></Grid>
        ))}
      </Grid>
    </div>
  )
}

export default ProductItemsList;