const add = require('../add.js');

test('sum', () => {
  expect(add(1, 2)).toBe(3);
});