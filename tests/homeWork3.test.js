const getMathResult = require('../src/homeWork3');

test('should result into "5---10---15"', function () {
  const result = getMathResult(5, 3);
  expect(result).toBe('5---10---15');
})

test('should result into "3---6---9---12---15---18---21---24---27---30"', function () {
  const result = getMathResult(3, 10);
  expect(result).toBe('3---6---9---12---15---18---21---24---27---30');
})

test('should result into "10---20---30---40---50"', function () {
  const result = getMathResult(10, 5);
  expect(result).toBe('10---20---30---40---50');
})

test('should result into 10 while 2nd arg is not a number', function () {
  const result = getMathResult(10, '5');
  expect(result).toBe(10);
})

test('should result into 20 while 2nd arg is less than or equal to zero', function () {
  let result = getMathResult(10, 0);
  expect(result).toBe(10);

  result = getMathResult(20, -5);
  expect(result).toBe(20);
})
