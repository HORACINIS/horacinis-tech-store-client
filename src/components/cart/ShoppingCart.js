import React from 'react';

const ShoppingCart = ({ cartItems }) => {

  const getTotalPrice = () => {
    return cartItems.reduce((sum, { price, quantity }) => sum + price * quantity, 0);
  }

  return (
    <div>
      <h1>Shopping Cart</h1>
      <ul>
        {cartItems.map(product => (
          <li key={product._id}>
            <p>{product.name}</p>
            <p><img width='100px' src={product.image} alt='phone' /></p>
            <p>Quantity: {product.quantity}</p>
            <p>Description: {product.description}</p>
            <p>${product.price}</p>
          </li>
        ))}
      </ul>
      <h3>Total: ${getTotalPrice()}</h3>
    </div>
  )
}


export default ShoppingCart;
