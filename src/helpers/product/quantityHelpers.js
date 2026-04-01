export const validateQuantity = (quantity) => {
  return quantity > 0;
};

export const validateMinQuantity = (quantity, min = 1) => {
  return quantity >= min;
};

export const incrementQuantity = (currentQuantity) => {
  return currentQuantity + 1;
};

export const decrementQuantity = (currentQuantity, min = 1) => {
  return currentQuantity > min ? currentQuantity - 1 : currentQuantity;
};

export const calculateItemSubtotal = (price, quantity) => {
  return price * quantity;
};

