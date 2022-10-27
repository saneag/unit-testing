const multiply = require('../scripts/multiply');

test('multiply', () => {
    expect(multiply('1', '2')).toBe('2');
});