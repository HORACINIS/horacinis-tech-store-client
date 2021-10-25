import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReviewsComponent from './../ReviewsComponent';
import Button from '@material-ui/core/Button';
import ImageStepper from './../../imageStepper/ImageStepper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const SingleItemDisplay = ({ fetchedProductsList, fetchProductItems, productCategory, addToCartFunc }) => {
  const { name } = useParams();

  useEffect(() => {
    fetchProductItems(productCategory)
  }, []); //eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      {fetchedProductsList.filter(product => product.name === name).map((product) => {
        const { _id, name, category, rating, numReviews, description, price, moreImages, features } = product;
        return (
          <Grid container key={_id} justifyContent='center' alignItems='center'>
            <Grid item xs={12} sm={8} md={8} lg={8} xl={6}>
              <Grid item style={{ marginTop: '20px' }}>
                <Link to={`/products/${category}`}>Back to {category}</Link>
              </Grid>
              <Grid container style={{ marginTop: '40px' }}>
                <Grid item>
                  <ReviewsComponent rating={rating} />
                </Grid>
                <Grid item>
                  {rating} ({numReviews})
                </Grid>
              </Grid>
              <h2>{name}</h2>
              <p>SKU: {_id}</p>
              <ImageStepper moreImages={moreImages} />
              <Typography style={{ margin: '20px 0px 40px 0px' }}>{description}</Typography>
              {features &&
                <List>
                  {features.length > 0 && (<Typography gutterBottom variant="h6">Key Features</Typography>)}
                  {features.map((feature, index) => (
                    <ListItem selected key={index}>{feature}</ListItem>
                  ))}
                </List>
              }
            </Grid>
            <Grid item xs={12} sm={2} md={2} lg={2} xl={2}>
              <Paper elevation={3} style={{ padding: '30px 10px 30px 10px', background: '#12239e' }}>
                <Typography variant='h5' align='center' color='secondary' >$ {price}.00</Typography>
                <Button color='secondary' variant='contained' fullWidth style={{ marginTop: '20px' }}
                  onClick={() => addToCartFunc(product)}
                >Add to Cart
                </Button>
                <Box style={{ background: 'white', marginTop: '20px' }}>
                  <Typography variant='subtitle2'>Seen it cheaper? Ask for a HTS Deal: </Typography>
                  <Typography variant='subtitle2'>13 48 66</Typography>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        )
      })}
    </>
  )
}

export default SingleItemDisplay;