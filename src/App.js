import React from 'react';
import LaptopsList from './components/products/laptops/LaptopsList';


console.log(`Client is running in ${process.env.REACT_APP_NODE_ENV.toUpperCase()} mode!`);


const App = () => {


  return (
    <div>
      <h1>React App</h1>
      <LaptopsList />
    </div>
  );
}

export default App;
