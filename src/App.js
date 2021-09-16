import React, { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import TopBar from './components/nav/topBar/TopBar';
import ShoppingCart from './components/cart/ShoppingCart';
import NavigationBar from './components/nav/navigationBar/NavigationBar';
import HeroCover from './components/heroCover/HeroCover';
import ProductItemsList from './components/productItems/ProductItemsList';
import SingleItemDisplay from './components/productItems/singleItem/SingleItemView';
import PageNotFound from './components/pageNotFound/PageNotFound';
import ProgressBar from './components/loading/ProgressBar';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

const PRODUCTSCATEGORY = ['phones', 'laptops', 'tablets']; // ADD ANY PRODUCTS ADDED TO THE MONGO DATABASE HERE

console.log(`Client is running in ${process.env.REACT_APP_NODE_ENV.toUpperCase()} mode!`);

let PRODUCTS_URL;

switch (process.env.REACT_APP_NODE_ENV) {
  case 'development':
    PRODUCTS_URL = `/api/v1/products`;
    console.log(PRODUCTS_URL); // NEEDS TO BE DELETED
    break;
  case 'production':
    PRODUCTS_URL = `https://horacinis-tech-store.herokuapp.com/api/v1/products`;
    console.log(PRODUCTS_URL); // NEEDS TO BE DELETED
    break;
  default:
    PRODUCTS_URL = '';
    break;
}


const App = () => {
  const [fetchedProductItems, setFetchedProductItems] = useState([]);
  const [progressBar, setProgressBar] = useState(false);

  const fetchProductItems = async (productList) => {
    try {
      setProgressBar(true);
      const response = await fetch(`${PRODUCTS_URL}/${productList}`);
      const data = await response.json();
      setFetchedProductItems(data.data[`${productList}`]);
      setProgressBar(false);
    } catch (err) {
      console.log(err);
    }
  }

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
      <header>
        <AppBar style={{ background: 'linear-gradient(4deg, rgba(0,23,255,1) 36%, rgba(5,160,247,1) 69%)' }}>
          <TopBar cartItems={cart} />
          <NavigationBar productsCategories={PRODUCTSCATEGORY} fetchProductsFunc={fetchProductItems} />
          {progressBar && <ProgressBar />}
        </AppBar>
        <Toolbar />
        <Toolbar />
      </header>
      <Switch>
        <Route exact path='/'>
          <HeroCover />
        </Route>
        {PRODUCTSCATEGORY.map((product, index) => (
          // product here refers to 'phones' or 'laptops', etc (from the category array at the top)
          <Route exact path={`/products/${product}`} key={index}>
            <ProductItemsList cart={cart} fetchedProducts={fetchedProductItems} productCategory={product} fetchProductsFunc={fetchProductItems} addToCartFunc={handleAddToCart} />
          </Route>
          // <Route key={index} exact path={`/products/${product}`} render={(props) => <ProductItemsList {...props} product={product} />} />
        ))}
        {PRODUCTSCATEGORY.map((productCategory, index) => (
          <Route key={index} exact path={`/products/${productCategory}/:name`}>
            {/* {console.log(`/products/${productCategory}/:id`)} */}
            <SingleItemDisplay fetchProductItems={fetchProductItems} productCategory={productCategory} fetchedProductsList={fetchedProductItems} addToCartFunc={handleAddToCart} />
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
