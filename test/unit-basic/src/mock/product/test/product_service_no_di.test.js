const ProductService = require('../product_service_no_di.js');
const ProductClient = require('../product_client.js');

// mock 생성
jest.mock('../product_client');

describe('ProductService', () => {
  const fetchItems = jest.fn(async () => [
    { item: 'milk', available: true },
    { item: 'banana', available: false },
  ]);

  ProductClient.mockImplementation(() => {
    return {
      fetchItems,
    }
  });

  let productService;

  beforeEach(() => {
    productService = new ProductService();
  });

  it('should filter out only available items', async () => {
    const items = await productService.fetchAvailableItems();
    expect(items.length).toBe(1);
    expect(items).toEqual([{ item: 'milk', available: true }]);
  });
});