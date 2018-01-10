var isOdd = require('./isOdd')

test('1 to equal true', () => {
    expect(isOdd(1)).toBe(true);
})

test('2 to equal false', () => {
    expect(isOdd(2)).toBe(false);
})
