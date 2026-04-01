import { legacy_createStore as createStore, applyMiddleware, compose } from 'redux';
import { thunk } from 'redux-thunk';
import rootReducer from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const loadCartFromLocalStorage = () => {
  try{
    const serializedCart = localStorage.getItem('cart');
    if(serializedCart === null) {
      return undefined;
    }
    return JSON.parse(serializedCart);
  }
  catch(err){
    return undefined;
  }
}

const saveCartToLocalStorage = (cart) => {
  try{
    const serializedCart = JSON.stringify(cart);
    localStorage.setItem('cart', serializedCart);
  }
  catch(err){
    console.error('Error saving to localStorage:', err);
  }
};

const persistedCart = loadCartFromLocalStorage();
const initialState = persistedCart ? { cart: { items: persistedCart } } : undefined;

const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);

store.subscribe(() => {
  saveCartToLocalStorage(store.getState().cart.items);
});

export default store;

