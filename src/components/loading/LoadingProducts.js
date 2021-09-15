import React from 'react';
import { Link } from 'react-router-dom';
import Skeleton from '@material-ui/lab/Skeleton';
import Grid from '@material-ui/core/Grid';

const LoadingProducts = () => {
  const quantity = 8;
  return (
    <div>
      <p><Link to='/'>Home</Link></p>
      <Grid container justifyContent="center" spacing={2}>
        {[...Array(quantity)].map((elem, index) => (
          <Grid key={index} item display='flex' xs={6} sm={4} lg={3}>
            <Grid container>
              <Skeleton animation='wave' variant='rect' width='100%' height={272} />
            </Grid>
          </Grid>
        ))}
      </Grid>
    </div >
  )
}

export default LoadingProducts;