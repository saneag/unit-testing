const divide = require('../scripts/divide');

test('divide', () => {
    expect(divide('1', '2')).toBe('0.5');
});