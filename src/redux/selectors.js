export const selectCartItems = (state) => state.cart.items;

export const selectCartCount = (state) => {
  return state.cart.items.reduce((count, item) => count + item.quantity, 0);
};

export const selectCartTotal = (state) => {
  return state.cart.items.reduce((total, item) => 
    total + (item.price * item.quantity), 0
  );
};

export const selectProducts = (state) => state.products.data;

export const selectProductsLoading = (state) => state.products.loading;

export const selectProductsError = (state) => state.products.error;

export const selectProductsByCategory = (state, category) => {
  return state.products.data.filter(product => product.category === category);
};

