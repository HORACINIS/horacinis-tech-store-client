import React from 'react';
import Button from '@material-ui/core/Button';
import underConstruction from './../../assets/under-construction.png';

const ShoppingCart = ({ cartItems, clearCartFunc }) => {

  const getTotalPrice = () => {
    return cartItems.reduce((sum, { price, quantity }) => sum + price * quantity, 0);
  }

  return (
    <div>
      <ul>
        {cartItems.map(product => (
          <li key={product._id}>
            <p>{product.name}</p>
            <p><img width='100px' src={product.image} alt='phone' /></p>
            <p>Quantity: <button>-</button><input type='number' readOnly value={product.quantity} /><button>+</button></p>
            <p>Description: {product.description}</p>
            <p>${product.price}</p>
          </li>
        ))}
      </ul>
      {cartItems.length > 0 ?
        (<div>
          <h3>Total: ${getTotalPrice()}</h3>
          <Button variant='contained' color='secondary' onClick={clearCartFunc}>CLEAR CART</Button>
        </div>
        )
        :
        (<h1>Shopping Cart Empty!</h1>)
      }
      <img src={underConstruction} alt='building' />
    </div>
  )
}


export default ShoppingCart;
