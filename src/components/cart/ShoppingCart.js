import React from 'react';

const ShoppingCart = ({ cartItems }) => {
  // const [total, setTotal] = useState(0);

  const getTotal = () => {
    return cartItems.reduce((sum, { price }) => sum + price, 0);
    // setTotal(totalSum);
  }

  // useEffect(() => {
  //   getTotal();
  // }, [total])

  return (
    <div>
      <h1>Shopping Cart Component</h1>
      <ul>
        {cartItems.map(product => (
          <li key={product._id}>
            <p>{product.name}</p>
            <p><img width='100px' src={product.image} alt='phone' /></p>
            <p>${product.price}</p>
          </li>
        ))}
      </ul>
      <h3>Total: ${getTotal()}</h3>
    </div>
  )
}


export default ShoppingCart;
