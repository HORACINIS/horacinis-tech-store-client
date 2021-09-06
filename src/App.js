import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import TopBar from './components/nav/topBar/TopBar';
import NavigationBar from './components/nav/navigationBar/NavigationBar';
import HeroCover from './components/heroCover/HeroCover';
import ProductItemsList from './components/productItems/ProductItemsList';
import PageNotFound from './components/pageNotFound/PageNotFound';

const PRODUCTS = ['phones', 'laptops']; // ADD ANY PRODUCTS ADDED TO THE MONGO DATABASE HERE

console.log(`Client is running in ${process.env.REACT_APP_NODE_ENV.toUpperCase()} mode!`);

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (productSelected) => {
    setCart([...cart, { ...productSelected }]);
  }



  return (
    <React.Fragment>
      <TopBar />
      <NavigationBar products={PRODUCTS} />
      <Switch>
        <Route exact path='/'>
          <HeroCover />
        </Route>
        {PRODUCTS.map((product, index) => (
          <Route exact path={`/products/${product}`} key={index}>
            <ProductItemsList product={product} />
          </Route>
          // <Route key={index} exact path={`/products/${product}`} render={(props) => <ProductItemsList {...props} product={product} />} />
        ))}
        <Route path='*'>
          <PageNotFound />
        </Route>
      </Switch>
    </React.Fragment>
  );
}

export default App;
