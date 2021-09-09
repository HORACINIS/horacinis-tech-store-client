import React from 'react';
import { Link } from 'react-router-dom';
import Skeleton from '@material-ui/lab/Skeleton';
import Grid from '@material-ui/core/Grid';

const LoadingProducts = () => {
  return (
    <div>
      <p><Link to='/'>Home</Link></p>
      <Grid container justifyContent="center" spacing={2}>

        <Grid item display='flex' xs={6} sm={4} lg={3}>
          <Grid container>
            <Skeleton variant='rect' width='100%' height={272} />
          </Grid>
        </Grid>

        <Grid item display='flex' xs={6} sm={4} lg={3}>
          <Grid container>
            <Skeleton variant='rect' width='100%' height={272} />
          </Grid>
        </Grid>

        <Grid item display='flex' xs={6} sm={4} lg={3}>
          <Grid container>
            <Skeleton variant='rect' width='100%' height={272} />
          </Grid>
        </Grid>

        <Grid item display='flex' xs={6} sm={4} lg={3}>
          <Grid container>
            <Skeleton variant='rect' width='100%' height={272} />
          </Grid>
        </Grid>

        <Grid item display='flex' xs={6} sm={4} lg={3}>
          <Grid container>
            <Skeleton variant='rect' width='100%' height={272} />
          </Grid>
        </Grid>

        <Grid item display='flex' xs={6} sm={4} lg={3}>
          <Grid container>
            <Skeleton variant='rect' width='100%' height={272} />
          </Grid>
        </Grid>

        <Grid item display='flex' xs={6} sm={4} lg={3}>
          <Grid container>
            <Skeleton variant='rect' width='100%' height={272} />
          </Grid>
        </Grid>

        <Grid item display='flex' xs={6} sm={4} lg={3}>
          <Grid container>
            <Skeleton variant='rect' width='100%' height={272} />
          </Grid>
        </Grid>

      </Grid>
    </div >
  )
}

export default LoadingProducts;
