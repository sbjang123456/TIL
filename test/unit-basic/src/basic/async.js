function fetchProduct(error) {
  if (error === 'error') {
    return Promise.reject('network error');
  }
  return Promise.resolve({ item: 'pizza', price: 2000 });
}

module.exports = fetchProduct;