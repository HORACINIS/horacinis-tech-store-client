import React from 'react';
import ProductItemsList from './components/productItems/ProductItemsList';

const PRODUCTS = ['phones', 'laptops']; // ADD ANY PRODUCTS ADDED TO THE MONGO DATABASE HERE

console.log(`Client is running in ${process.env.REACT_APP_NODE_ENV.toUpperCase()} mode!`);

const App = () => {

  return (
    <div>
      <h1>React App</h1>
      {PRODUCTS.map((product, index) => (
        <ProductItemsList key={index} product={product} />
      ))}
    </div>
  );
}

export default App;
