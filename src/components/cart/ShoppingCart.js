import React, { useEffect } from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import PlusIcon from '@material-ui/icons/Add';
import LessIcon from '@material-ui/icons/Remove';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import emptyCart from './../../assets/empty-cart-icon.png';
import useStyles from './shoppingCartStyles';

const ShoppingCart = ({ cartItems, setCartItems, setTabSelectedValue }) => {
  const classes = useStyles();

  useEffect(() => {
    setTabSelectedValue(false);
  }, [setTabSelectedValue]);


  const increaseDecreaseQuantity = (quantity, productItem) => {
    if (quantity <= 0 || isNaN(quantity)) quantity = 1;
    let newCart = [...cartItems];
    newCart.find(product => product._id === productItem._id).quantity = parseInt(quantity);
    setCartItems(newCart)
  }

  const handleRemoveSingleProduct = (productSelected) => {
    const productsLeft = cartItems.filter(product => product._id !== productSelected._id);
    setCartItems(productsLeft);
  }

  const getTotalPrice = () => {
    return cartItems.reduce((sum, { price, quantity }) => sum + price * quantity, 0);
  }

  const handleClearCart = () => {
    setCartItems([]);
    setTimeout(() => alert('Cart Cleared!'), 0); // To add a custom pop up message here instead...
  }


  return (
    <React.Fragment>
      <Link to='/'>Home</Link>
      <Grid container justifyContent='center' alignItems='center' direction='column'>
        <Grid item>
          <Typography variant='h3' className={classes.title}>Shopping Cart</Typography>
        </Grid>
        {cartItems.length > 0 ? (
          <Grid item sm={10} lg={8}>
            <TableContainer component={Paper}>
              <Table aria-label="cart table">
                <TableBody>
                  {cartItems.map((product, index) => (
                    <TableRow key={product.name} >
                      <TableCell scope="row"> {/* style={{ width: '85px' }}*/}
                        <Link to={`/products/${product.category}/${product.name}`}>
                          <img alt='product' src={product.image} className={classes.productImage} />
                        </Link>
                        <Typography variant='subtitle1'>{product.name}</Typography>
                      </TableCell>
                      <TableCell align='center' >
                        <div className={classes.quantityButtons}>
                          <Button color='primary'
                            onClick={() => {
                              const input = document.querySelector(`#item-quantity-input-${index}`)
                              let inputValue = parseInt(input.value);
                              inputValue = inputValue - 1;
                              increaseDecreaseQuantity(inputValue, product)
                            }}
                          >
                            <LessIcon />
                          </Button>
                          <input id={`item-quantity-input-${index}`} type='number' readOnly min='1' max='10' value={product.quantity} />
                          <Button color='primary'
                            onClick={() => {
                              const input = document.querySelector(`#item-quantity-input-${index}`)
                              let inputValue = parseInt(input.value);
                              inputValue = inputValue + 1;
                              increaseDecreaseQuantity(inputValue, product)
                            }}>
                            <PlusIcon />
                          </Button>
                          <Button variant='text' size='small' color='secondary' onClick={() => handleRemoveSingleProduct(product)}>
                            Remove
                          </Button>
                        </div>
                      </TableCell>
                      <TableCell>
                      </TableCell>
                      <TableCell className={classes.productPriceTablecell} align="right">
                        <Typography>
                          $ {product.price}
                        </Typography>
                      </TableCell>
                    </TableRow>
                  ))}
                  <TableRow>
                    <TableCell>
                      <Button variant='text' size='medium' color='secondary'
                        onClick={handleClearCart}
                      >
                        CLEAR CART
                      </Button>
                    </TableCell>
                    <TableCell colSpan={2} align='right'>
                      <Typography variant='h6'>Total</Typography>
                    </TableCell>
                    <TableCell align='right'>
                      <Typography variant='h6'>{`$${getTotalPrice()}`}</Typography>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        ) :
          (
            <React.Fragment>
              <Grid>
                <img src={emptyCart} alt='empty cart' className={classes.emptyCartIcon} />
              </Grid>
              <Grid item>
                <Typography variant='h6' className={classes.emptyCartSubtitle}>Your Shopping Cart is empty!</Typography>
              </Grid>
              <Grid item>
                <Typography color='textSecondary' variant='subtitle1' align='center'>Before proceeding to checkout you must add some products to your shopping cart.</Typography>
              </Grid>
            </React.Fragment>
          )
        }
      </Grid>
    </React.Fragment>
  );
}

export default ShoppingCart;
