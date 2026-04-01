export const calculateCartTotal = (items) => {
  return items.reduce((total, item) =>
    total + (item.price * item.quantity), 0
  );
};

export const calculateCartCount = (items) => {
  return items.reduce((count, item) => count + item.quantity, 0);
};

export const findCartItem = (items, productId) => {
  return items.find(item => item.id === productId);
};

