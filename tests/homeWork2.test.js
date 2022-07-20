const numbersOfNeighbours = require('../src/homeWork2')

test('should receive neighbours around 5', () => {
  // const [left, mid, left] = numbersOfNeighbours(5); // ES6
  // expect(left).toBe(4);
  // expect(mid).toBe(5);
  // expect(right).toBe(6);

  // const [left, mid, ...rest] = numbersOfNeighbours(5); // ES6
  // expect(left).toBe(4);
  // expect(mid).toBe(5);
  // expect(rest.length).toBe(1);

  const array = numbersOfNeighbours(5); // ES5
  expect(array).toEqual([4, 5, 6]);
});
