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
  const cartFromLocalStorage = JSON.parse(localStorage.getItem('cart') || '[]');
  const [cart, setCart] = useState(cartFromLocalStorage);

  const handleAddToCart = (productSelected) => {
    // cart.filter(product => {
    //   let producto;
    //   if (productSelected._id === product._id) {
    //     product = { ...product, quantity: product.quantity + 1 }
    //     console.log(producto)
    //   }
    //   return product;
    // })

    setCart(() => {
      return [...cart, { ...productSelected, quantity: 1 }]
    });
  }

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);



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
          <ShoppingCart cartItems={cart} />
        </Route>
        <Route path='*'>
          <PageNotFound />
        </Route>
      </Switch>
    </React.Fragment>
  );
}

export default App;
