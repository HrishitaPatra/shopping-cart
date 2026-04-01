import { calculateCartTotal, calculateCartCount } from '../helpers/cart/cartCalculations';
import { filterProductsByCategory } from '../helpers/product/filterHelpers';

export const selectCartItems = (state) => state.cart.items;

export const selectCartCount = (state) => {
  return calculateCartCount(state.cart.items);
};

export const selectCartTotal = (state) => {
  return calculateCartTotal(state.cart.items);
};

export const selectProducts = (state) => state.products.data;

export const selectProductsLoading = (state) => state.products.loading;

export const selectProductsError = (state) => state.products.error;

export const selectProductsByCategory = (state, category) => {
  return filterProductsByCategory(state.products.data, category);
};

