import React from 'react';
import Button from '@material-ui/core/Button';
import underConstruction from './../../assets/under-construction.png';

const ShoppingCart = ({ cartItems, setCartItems }) => {

  const getTotalPrice = () => {
    return cartItems.reduce((sum, { price, quantity }) => sum + price * quantity, 0);
  }

  const increaseDecreaseQuantity = (quantity, productItem) => {
    let newCart = [...cartItems];
    newCart.find(product => product._id === productItem._id).quantity = quantity;

    setCartItems(newCart)
  }

  const handleRemoveSingleProduct = (productSelected) => {
    const productsLeft = cartItems.filter(product => product._id !== productSelected._id);
    setCartItems(productsLeft);
  }

  const handleClearCart = () => {
    setCartItems([]);
    setTimeout(() => alert('Cart Cleared!'), 0);
  }

  return (
    <div>
      <ul>
        {cartItems.map(product => (
          <li key={product._id}>
            <p>{product.name}</p>
            <p><img width='100px' src={product.image} alt='phone' /></p>
            <p>
              Quantity: <input type='number' min='1' max='10' onChange={(e) => increaseDecreaseQuantity(e.target.value, product)} value={product.quantity} />
            </p>
            <p>Description: {product.description}</p>
            <p>${product.price}</p>
            <Button variant='outlined' color='secondary' onClick={() => handleRemoveSingleProduct(product)}>
              Remove
            </Button>
          </li>
        ))}
      </ul>
      {cartItems.length > 0 ?
        (<div>
          <h3>Total: ${getTotalPrice()}</h3>
          <Button variant='contained' color='secondary' onClick={handleClearCart}>CLEAR CART</Button>
        </div>
        )
        :
        (<div>
          <h1>Shopping Cart Empty!</h1>
          <h2>(Go and add items)</h2>
        </div>
        )
      }
      <img src={underConstruction} alt='building' />
    </div>
  )
}


export default ShoppingCart;
