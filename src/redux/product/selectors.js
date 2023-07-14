export const productsSelector = state => {
  return [...state.products.products].sort((a, b) => a.price - b.price);
};
