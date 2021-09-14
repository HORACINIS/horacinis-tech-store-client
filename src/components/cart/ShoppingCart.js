import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import PlusIcon from '@material-ui/icons/Add';
import LessIcon from '@material-ui/icons/Remove';
import underConstruction from './../../assets/under-construction.png';

const ShoppingCart = ({ cartItems, setCartItems }) => {

  const getTotalPrice = () => {
    return cartItems.reduce((sum, { price, quantity }) => sum + price * quantity, 0);
  }

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

  const handleClearCart = () => {
    setCartItems([]);
    setTimeout(() => alert('Cart Cleared!'), 0);
    setTimeout(() => window.location.pathname = '/products/phones', 250);
  }

  return (
    <div>
      <p><Link to='/'>Home</Link></p>
      <ul>
        {cartItems.map((product, index) => (
          <li key={product._id}>
            <h3><b>{product.name}</b></h3>
            <p><Link to={`/products/${product.category}/${product.name}`}><img width='100px' src={product.image} alt='phone' /></Link></p>
            <p>
              Quantity: <Button color='secondary'
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
            </p>
            {/* <p>Description: {product.description}</p> */}
            <p>${product.price}</p>
            <Button variant='outlined' color='secondary' onClick={() => handleRemoveSingleProduct(product)}>
              Remove
            </Button>
            <hr />
          </li>
        ))}
      </ul>
      {cartItems.length > 0 ?
        (<div>
          <h3>Total: ${getTotalPrice()}</h3>
          <Button style={{ marginBottom: '20px' }} variant='contained' color='secondary' onClick={handleClearCart}>CLEAR CART</Button>
        </div>
        )
        :
        (<div>
          <h1>Shopping Cart Empty!</h1>
          <h2>(Go and add items)</h2>
        </div>
        )
      }
      <img width='100%' src={underConstruction} alt='building' />
      <img width='100%' src={underConstruction} alt='building' />
    </div>
  )
}


export default ShoppingCart;
