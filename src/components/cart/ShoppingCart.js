import React from 'react';
import Button from '@material-ui/core/Button';
import underConstruction from './../../assets/under-construction.png';

const ShoppingCart = ({ cartItems, setCart}) => {

  const getTotalPrice = () => {
    return cartItems.reduce((sum, { price, quantity }) => sum + price * quantity, 0);
  }

  const increaseDecreaseQuantity = (e, product) => {
    if (e.target.value === 2) {
      product.quantity++;
    }
    console.log(e.target)
  }

  const handleClearCart = () => {
    setCart([]);
    setTimeout(() => alert('Cart Cleared!'), 0);
  }

  return (
    <div>
      <ul>
        {cartItems.map(product => (
          <li key={product._id}>
            <p>{product.name}</p>
            <p><img width='100px' src={product.image} alt='phone' /></p>
            <p>Quantity:
              {/* <button onClick={() => product.quantity - 1}>-</button> */}
              <input type='number' min='1' onChange={(e) => increaseDecreaseQuantity(e, product)} value={product.quantity} />
              {/* <button onClick={() => product.quantity - 1}>+</button> */}
            </p>
            <p>Description: {product.description}</p>
            <p>${product.price}</p>
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
