// import React, { useEffect } from 'react';
// import Button from '@material-ui/core/Button';
// import { Link } from 'react-router-dom';
// import PlusIcon from '@material-ui/icons/Add';
// import LessIcon from '@material-ui/icons/Remove';
// import underConstruction from './../../assets/under-construction.png';
// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
// import Grid from '@material-ui/core/Grid';

// const ShoppingCart = ({ cartItems, setCartItems, setTabSelectedValue }) => {
//   useEffect(() => {
//     setTabSelectedValue(false);
//   }, [setTabSelectedValue]);

//   const getTotalPrice = () => {
//     return cartItems.reduce((sum, { price, quantity }) => sum + price * quantity, 0);
//   }

//   const increaseDecreaseQuantity = (quantity, productItem) => {
//     if (quantity <= 0 || isNaN(quantity)) quantity = 1;
//     let newCart = [...cartItems];
//     newCart.find(product => product._id === productItem._id).quantity = parseInt(quantity);
//     setCartItems(newCart)
//   }

//   const handleRemoveSingleProduct = (productSelected) => {
//     const productsLeft = cartItems.filter(product => product._id !== productSelected._id);
//     setCartItems(productsLeft);
//   }

//   const handleClearCart = () => {
//     setCartItems([]);
//     setTimeout(() => alert('Cart Cleared!'), 0);
//     setTimeout(() => window.location.pathname = '/products/phones', 250);
//   }

//   return (
//     <div>
//       <p><Link to='/'>Home</Link></p>
//       <List>
//         {cartItems.map((product, index) => (
//           <ListItem key={product._id}>
//             <Grid container>
//               <Grid item>

//                 <h3><b>{product.name}</b></h3>
//                 <p><Link to={`/products/${product.category}/${product.name}`}><img width='100px' src={product.image} alt='phone' /></Link></p>
//                 <p>
//                   Quantity: <Button color='secondary'
//                     onClick={() => {
//                       const input = document.querySelector(`#item-quantity-input-${index}`)
//                       let inputValue = parseInt(input.value);
//                       inputValue = inputValue - 1;
//                       increaseDecreaseQuantity(inputValue, product)
//                     }}
//                   >
//                     <LessIcon />
//                   </Button>
//                   <input id={`item-quantity-input-${index}`} type='number' readOnly min='1' max='10' value={product.quantity} />
//                   <Button color='secondary'
//                     onClick={() => {
//                       const input = document.querySelector(`#item-quantity-input-${index}`)
//                       let inputValue = parseInt(input.value);
//                       inputValue = inputValue + 1;
//                       increaseDecreaseQuantity(inputValue, product)
//                     }}>
//                     <PlusIcon />
//                   </Button>
//                 </p>
//                 {/* <p>Description: {product.description}</p> */}
//                 <p>$ {product.price}</p>
//                 <Button variant='outlined' color='secondary' onClick={() => handleRemoveSingleProduct(product)}>
//                   Remove
//                 </Button>
//                 <hr />
//               </Grid>

//             </Grid>
//           </ListItem>
//         ))}
//       </List>
//       {cartItems.length > 0 ?
//         (<div>
//           <h3>Total: $ {getTotalPrice()}</h3>
//           <Button style={{ marginBottom: '20px' }} variant='contained' color='secondary' onClick={handleClearCart}>CLEAR CART</Button>
//         </div>
//         )
//         :
//         (<div>
//           <h1>Shopping Cart Empty!</h1>
//           <h2>(Go and add products to the cart)</h2>
//           <img width='100%' src={underConstruction} alt='building' />
//           <img width='100%' src={underConstruction} alt='building' />
//         </div>
//         )
//       }
//     </div>
//   )
// }


// export default ShoppingCart;


import React, { useEffect } from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import PlusIcon from '@material-ui/icons/Add';
import LessIcon from '@material-ui/icons/Remove';
import underConstruction from './../../assets/under-construction.png';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles2 = makeStyles({
  table: {
    minWidth: 500,
  },
});

const ShoppingCart = ({ cartItems, setCartItems, setTabSelectedValue }) => {
  const classes = useStyles2();

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
    setTimeout(() => alert('Cart Cleared!'), 0);
    setTimeout(() => window.location.pathname = '/products/phones', 250);
  }


  return (
    <TableContainer component={Paper} style={{ minWidth: 'fitContent' }}>
      <Table aria-label="cart table">
        <TableBody>
          {cartItems.map((product, index) => (
            <TableRow key={product.name} >
              <TableCell scope="row">
                <img alt='product' src={product.image} style={{ width: '100px' }} />
                {product.name}
              </TableCell>

              {/* <TableCell style={{ width: 160 }} align="right"> */}
              {/* <TableCell>
                <img alt='product' src={product.image} style={{ width: '100px' }} />
              </TableCell> */}


              {/* <TableCell>
                <Button variant='text' color='secondary' onClick={() => handleRemoveSingleProduct(product)}>
                  Remove
                </Button>
              </TableCell> */}


              <TableCell align='center'>
                {/* <Button variant='text' color='secondary' onClick={() => handleRemoveSingleProduct(product)}>
                  Remove
                </Button> */}
                <div style={{ border: 'pink 0.5px solid'}}>

                  <Button color='secondary'
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
                  <Button color='secondary'
                    onClick={() => {
                      const input = document.querySelector(`#item-quantity-input-${index}`)
                      let inputValue = parseInt(input.value);
                      inputValue = inputValue + 1;
                      increaseDecreaseQuantity(inputValue, product)
                    }}>
                    <PlusIcon />
                  </Button>
                </div>
                <Button variant='text' color='secondary' onClick={() => handleRemoveSingleProduct(product)}>
                  Remove
                </Button>
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                <Typography>
                  $ {product.price}
                </Typography>
              </TableCell>
            </TableRow>
          ))}
          <TableRow>
            {/* <TableCell rowSpan={3} /> */}
            <TableCell colSpan={2} align='right'>
              <Typography>Total</Typography>
            </TableCell>
            <TableCell align='right'>
              <Typography>{`$${getTotalPrice()}`}</Typography>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default ShoppingCart;
