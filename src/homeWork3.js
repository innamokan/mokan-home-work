function getMathResult(base, times) {
  // if (typeof times !== 'number') return base;
  // if (times <= 0) return base;

  // const isNotNumber = typeof times !== 'number';
  // const isLessThanOrEqualToZero = times <= 0;
  // if (isNotNumber || isLessThanOrEqualToZero) return base;

  if (typeof times !== 'number' || times <= 0) return base;

  let result = `${base}`;
  const delimiter = '---';
  for (let step = 2; step <= times; step++) {
    const next = base * step;
    result += delimiter + next;
  }
  return result;
}

module.exports = getMathResult;
