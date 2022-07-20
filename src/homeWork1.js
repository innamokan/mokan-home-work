function sayHello(name) {
  // // if (name === undefined) return 'Hello, Anonymous!';
  // // if (name == null) return 'Hello, Anonymous!';

  // if (!name) return 'Hello, Anonymous!';
  // return 'Hello, ' + name + '!';

  // // boolean expression ? true : false
  // const result = !name ? 'Anonymous' : name;
  // return 'Hello, ' + result + '!';

  // var str = "ololo";
  // `str is: ${str}` => "str is: ololo"
  const result = !name ? 'Anonymous' : name;
  return `Hello, ${result}!`;
}

module.exports = sayHello;
