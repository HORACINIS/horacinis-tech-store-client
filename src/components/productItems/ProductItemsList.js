import React from 'react';
import { Link } from 'react-router-dom';
import ProductItem from './ProductItem';
import Grid from '@material-ui/core/Grid';

const ProductItemsList = ({ fetchedProducts, addToCartFunc, getSingleProductFunc }) => {

  return (
    <div>
      <p><Link to='/'>Home</Link></p>
      <Grid container justifyContent="center" spacing={2}>
        {fetchedProducts && fetchedProducts.map(product => (
          <Grid item display='flex' key={product._id} xs={6} sm={4} lg={3}>
            <ProductItem product={product} getSingleProductFunc={getSingleProductFunc} addToCartFunc={addToCartFunc} />
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default ProductItemsList;