const sayHello = require('../src/homeWork1');
// test driven development (TDD) - разработка через тесирование

test('should say hello to Inna', function () {
  const greeting = sayHello('Inna');
  expect(greeting).toBe('Hello, Inna!');
});

test('should say hello to Anonymous?', function () {
  const greeting = sayHello();
  expect(greeting).toBe('Hello, Anonymous!');
});
