import React, { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import TopBar from './components/nav/topBar/TopBar';
import ShoppingCart from './components/cart/ShoppingCart';
import NavigationBar from './components/nav/navigationBar/NavigationBar';
import HeroCover from './components/heroCover/HeroCover';
import ProductItemsList from './components/productItems/ProductItemsList';
import PageNotFound from './components/pageNotFound/PageNotFound';

const PRODUCTS = ['phones', 'laptops']; // ADD ANY PRODUCTS ADDED TO THE MONGO DATABASE HERE

console.log(`Client is running in ${process.env.REACT_APP_NODE_ENV.toUpperCase()} mode!`);

const App = () => {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (productSelected) => {
    setCart([...cart, { ...productSelected }]);
    console.log(cart)
  }

  useEffect(() => {
    console.log(cart);
  }, [cart])



  return (
    <React.Fragment>
      <TopBar cartItems={cart} />
      <NavigationBar products={PRODUCTS} />
      <Switch>
        <Route exact path='/'>
          <HeroCover />
        </Route>
        {PRODUCTS.map((product, index) => (
          <Route exact path={`/products/${product}`} key={index}>
            <ProductItemsList product={product} addToCartFunc={handleAddToCart} />
          </Route>
          // <Route key={index} exact path={`/products/${product}`} render={(props) => <ProductItemsList {...props} product={product} />} />
        ))}
        <Route exact path='/cart'>
          <ShoppingCart />
        </Route>
        <Route path='*'>
          <PageNotFound />
        </Route>
      </Switch>
    </React.Fragment>
  );
}

export default App;
