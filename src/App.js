import React, { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import TopBar from './components/nav/topBar/TopBar';
import ShoppingCart from './components/cart/ShoppingCart';
import NavigationBar from './components/nav/navigationBar/NavigationBar';
import HeroCover from './components/heroCover/HeroCover';
import ProductItemsList from './components/productItems/ProductItemsList';
import SingleItemDisplay from './components/productItems/singleItem/SingleItemView';
import PageNotFound from './components/pageNotFound/PageNotFound';

const PRODUCTS = ['phones', 'laptops']; // ADD ANY PRODUCTS ADDED TO THE MONGO DATABASE HERE

console.log(`Client is running in ${process.env.REACT_APP_NODE_ENV.toUpperCase()} mode!`);


const App = () => {
  const cartFromLocalStorage = JSON.parse(localStorage.getItem('cart') || '[]');
  const [cart, setCart] = useState(cartFromLocalStorage);

  const handleAddToCart = (productSelected) => {
    let newCart = [...cart];
    let itemInCart = newCart.find(product => product._id === productSelected._id);

    if (itemInCart) {
      itemInCart.quantity++;
    } else {
      itemInCart = { ...productSelected, quantity: 1 }
      newCart.push(itemInCart);
    }
    setCart(newCart);
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

        {PRODUCTS.map((product, index) => (
          <Route key={index} exact path={`/products/${product}/:_id`}>
            {console.log(`/products/${product}/:_id`)}
            <SingleItemDisplay product={product} />
          </Route>
        ))}


        <Route exact path='/cart'>
          <ShoppingCart cartItems={cart} setCartItems={setCart} />
        </Route>
        <Route path='*'>
          <PageNotFound />
        </Route>
      </Switch>
    </React.Fragment>
  );
}

export default App;
