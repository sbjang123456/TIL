const fetchProduct = require('../async');

describe('Async', () => {
  it('async - done', (done) => {
    fetchProduct().then((item) => {
      expect(item).toEqual({ item: 'pizza', price: 2000 });
      done();
    });
  });
  it('async - return', () => {
    return fetchProduct().then((item) => {
      expect(item).toEqual({ item: 'pizza', price: 2000 });
    });
  });
  it('async - await', async () => {
    const product = await fetchProduct();
    expect(product).toEqual({ item: 'pizza', price: 2000 });
  });
  it('async - resolves', () => {
    expect(fetchProduct()).resolves.toEqual({
      item: 'pizza',
      price: 2000
    })
  });
  it('async - reject', () => {
    expect(fetchProduct('error')).rejects.toBe('network error')
  });
});