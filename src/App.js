import React, { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import TopBar from './components/nav/topBar/TopBar';
import ShoppingCart from './components/cart/ShoppingCart';
import NavigationBar from './components/nav/navigationBar/NavigationBar';
import HeroCover from './components/heroCover/HeroCover';
import ProductItemsList from './components/productItems/ProductItemsList';
import SingleItemDisplay from './components/productItems/singleItem/SingleItemView';
import PageNotFound from './components/pageNotFound/PageNotFound';

const PRODUCTSCATEGORY = ['phones', 'laptops']; // ADD ANY PRODUCTS ADDED TO THE MONGO DATABASE HERE

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

  const fetchItems = async (productList) => {
    try {
      const response = await fetch(`${PRODUCTS_URL}/${productList}`);
      const data = await response.json();
      setFetchedProductItems(data.data[`${productList}`]);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchItems('phones'); // a string from one of the products category  array (top) has to be passed in
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  setTimeout(() => console.log(fetchedProductItems), 3000)

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

  const [singleItemProduct, setSingleItemProduct] = useState({});
  const productToRenderInSingleView = (product) => {
    setSingleItemProduct(product);
  }

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);


  return (
    <React.Fragment>
      <TopBar cartItems={cart} />
      <NavigationBar products={PRODUCTSCATEGORY} />
      <Switch>
        <Route exact path='/'>
          <HeroCover />
        </Route>
        {PRODUCTSCATEGORY.map((product, index) => (
          <Route exact path={`/products/${product}`} key={index}>
            <ProductItemsList product={product} getSingleProductFunc={productToRenderInSingleView} addToCartFunc={handleAddToCart} />
          </Route>
          // <Route key={index} exact path={`/products/${product}`} render={(props) => <ProductItemsList {...props} product={product} />} />
        ))}

        {PRODUCTSCATEGORY.map((productCategory, index) => (
          <Route key={index} exact path={`/products/${productCategory}/:id`}>
            {/* {console.log(`/products/${productCategory}/:id`)} */}
            <SingleItemDisplay addToCartFunc={handleAddToCart} singleItemProduct={singleItemProduct} />
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
