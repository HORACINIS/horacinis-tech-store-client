import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NavbarComponent from './components/nav/NavbarComponent';
import HeroCover from './components/heroCover/HeroCover';
import ProductItemsList from './components/productItems/ProductItemsList';
import PageNotFound from './components/pageNotFound/PageNotFound';

const PRODUCTS = ['phones', 'laptops']; // ADD ANY PRODUCTS ADDED TO THE MONGO DATABASE HERE

console.log(`Client is running in ${process.env.REACT_APP_NODE_ENV.toUpperCase()} mode!`);

const App = () => {

  return (
    <React.Fragment>
      <NavbarComponent products={PRODUCTS} />
      <Switch>
        <Route exact path='/'>
          <HeroCover />
        </Route>
        {PRODUCTS.map((product, index) => (
          <Route exact path={`/products/${product}`} key={index}>
            <ProductItemsList product={product} />
          </Route>
        ))}
        <Route path='*'>
          <PageNotFound />
        </Route>
      </Switch>
    </React.Fragment>
  );
}

export default App;
