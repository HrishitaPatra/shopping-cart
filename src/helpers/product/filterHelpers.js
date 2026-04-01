export const filterProductsByCategory = (products, category) => {
  return products.filter(product => product.category === category);
};

export const getUniqueCategories = (products) => {
  return [...new Set(products.map(p => p.category))];
};

